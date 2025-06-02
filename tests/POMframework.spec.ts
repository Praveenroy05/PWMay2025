// POM - Page Object Model

// Page object model is a design pattern used in the software tesing to represent a web page as an object. It is a way to organise and manage the interaction with a web page by creating that encapsulate the properties (variable) and behaviour (action) of that particular page.


// This approach promotes reusability and reduces the code duplication as same page object will be used across multiple test cases. Additionaly it also aloows for easier update  to the test case.


// POM from scratch

// 1. PAGE LAYER - Will create a package or folder  (pages) ----> Locators and methods specific to the page
// LoginPage.ts, DashboardPage.ts, ........
// BasePage.ts --- clickOnElement(), getText() , fillInput()


// clickOnElement(){
//     page.locator(),click()
//     console.log("Successfully clicked on elements")
// }

// 2. TEST LAYER - Pure test cases and assertions
// LoginPageTest.spec.ts , DashboardPageTest.spec.ts, .....

// 3. TEST DATA - JSON/Excel or Constant class, TestData.json, TestData.xlsx

// 4. UTILS - screenshot(), scrolling(), reading the data from excel, API methods

// 5. REPORT - Allure/HTML



// Hooks - 
// Before each test
// Before all tests
// After each test
// After all tests

//annotations - tag  - smoke or/and regression
// 

