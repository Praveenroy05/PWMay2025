import {test, expect} from '@playwright/test'

const email = "test7lYM@gmail.com"
const password = "Test@123"
const productName = "IPHONE 13 PRO"
const country = " Singapore"

test.describe.configure({mode: 'parallel', timeout : 120000})

test.describe("E2E Test Cases", async()=>{
test("E2E Automation scenario", async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/client")
    await page.getByPlaceholder("email@example.com").fill(email)
    await page.getByPlaceholder("enter your passsword").fill(password)
    await page.getByRole('button', {name: 'Login'}).click()
    await expect(page.locator(".fa-sign-out")).toBeVisible()

    const products = page.locator("div.card-body")
    await products.nth(1).waitFor()

    // count() - total matching elements using the locators
    const countOfProduct = await products.count() // 3 

    for(let i=0; i<countOfProduct; i++){
        // Iterate through each and every product and get the text value of the product one by one

        const productText = await products.nth(i).locator("h5").textContent()  // div.card-body h5
        if(productText === productName){
            await products.nth(i).locator('button').last().click()
            break
        }
    }
    // asignment - goto car and validate the product name and price are same as it is on the home page

    await page.locator("[routerlink='/dashboard/cart']").click()
    await page.getByRole('button', {name: 'Checkout'}).click()

    const paymentPageLocator = page.locator("div.row input.text-validated")

    await paymentPageLocator.first().clear()
    await paymentPageLocator.first().fill("4542 9931 9292 0000")
    await expect(paymentPageLocator.nth(1)).toHaveValue(email)
    await paymentPageLocator.last().pressSequentially("in")
    await expect(page.locator("section.ta-results")).toBeVisible()

    // const texts = await page.locator("section.ta-results button").allTextContents()
    // console.log(texts);

    const dropDownValues = page.locator("section.ta-results button")
    const countOfCountries = await dropDownValues.count() // 37, 100
    for(let i=0; i<countOfCountries; i++){
        const countryName = await dropDownValues.nth(i).textContent()
        if(countryName === country){
            await dropDownValues.nth(i).click()
            break
        }
    }

    await page.getByText("Place Order ").click()
    await expect(page.locator(".hero-primary")).toBeVisible()
    const orderID = await page.locator("label.ng-star-inserted").textContent()
    // | 6839d42d81a206953053e754 |
    await page.locator("button[routerlink='/dashboard/myorders']").click()
    await expect(page.locator("tbody")).toBeVisible()

    const rows = page.locator("tbody tr")
    const countOfRows = await rows.count() // 7
    let tableOrderID
    for(let i=0; i<countOfRows; i++){
        tableOrderID = await rows.nth(i).locator("th").textContent()
        // 6839d42d81a206953053e754
        if(orderID?.includes(tableOrderID)){
            await rows.nth(i).locator("button").first().click()
            break
        }
    }

    await expect(page.locator("div.col-text")).toHaveText(tableOrderID)
})

test("e2e", async ({page})=>{
    await page.goto("http://google.com")
})
})