// Hooks - 

// test.beforeAll() - It will run before running any of the test case
// test.beforeEach() - it will run once before runing each and every test case
// test.afterEach() - it will run once after each test cases
// test.afterAll() - It will run once after running all the test cases


import {test, expect} from '@playwright/test'

test.beforeAll(async ()=>{
    console.log("Before All")
})

test.afterAll(async ()=>{
    console.log("After All")
})

test.beforeEach(async ()=>{
    console.log("Before Each")
})

test.afterEach(async ()=>{
    console.log("After Each")
})

test.describe("Group Title", async ()=>{
test("Test3", {tag : ['@smoke', '@api']},async ()=>{
    console.log("Test3")
})

test("Test1", async ()=>{
    console.log("Test1")
})

test("Test2", async ()=>{
    console.log("Test2")
})

})

