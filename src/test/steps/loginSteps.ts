// import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
// import { Page, Browser, expect, Response} from "@playwright/test";
// import * as testdata from "D:/Namratha Sri Projects/Playwright_automation/src/main/testdata/testdata.json";
// import { findSourceMap } from "module";
// import ExcelJS from 'exceljs';
// import  * as fs from 'fs';
// import  * as path from 'path';
// import { fixture } from "../../test/hooks/Pagefixture";
// import { common_methods } from "../Base/Baseclass";
// import Page_Object from "../Locator/PageObject";

// setDefaultTimeout(120000);

// Let Base: common_methods;

// const workbook new ExcelJS.Workbook();

// const worksheet workbook.addWorksheet('Books');

// const URLSheet workbook.addWorksheet('URLS')

// const URLheading = ['Web Requests'];

// URLSheet.addRow(URLheading)

// URLSheet.getColumn(1).width = 100;

// Then('Heading to the Book Cart excel data', async function(){

//     // Apply styling to the heading row
    
//     const heading = [" Book Cart "];
    
//     worksheet.addRow(heading);
    
//     logInfoToExcel("__________________________________________");
    
//     worksheet.getColumn(1).width = 20;
    
//     // Apply bold styling and center alignment to the heading cell
    
//     const headingRow = worksheet.getRow(1);
    
//     headingRow.getCell(1).font = { bold: true};
    
//     headingRow.getCell(1).alignment = { vertical: 'middle', horizontal: 'center"};
    
//     });
    
//     function logInfoToExcel(message: string) {
    
//     console.log(message); // Log to console
    
//     worksheet.addRow([message]); // Add message to the worksheet
    
//     }
    
//     function logURLToExcel (message: string) {
    
//     // console.log(message); // Log to console
    
//     URLSheet.addRow([message]); // Add message to the worksheet
    
//     }


//     async function saveWorkbookWithRetry (filepath: string, retryCount: number = 3) {

//         for (let attempt = 1; attempt <= retryCount; attempt++) {
        
//         try {
        
//         await workbook.xlsx.writeFile(filepath);
        
//         console.log('Workbook saved successfully.');
        
//         break; // Exit loop if successful
        
//         } catch (error) {
        
//         if (attempt === retryCount) {
        
//         console.error('Failed to save workbook after multiple attempts:', error);
        
//         throw error; // Re-throw the error if all attempts fail
        
//         }
        
//         console.warn(`Attempt ${attempt} failed. Retrying....`);
        
//         await new Promise(resolve => setTimeout(resolve, 1000)); // Wait before retrying
        
//         }
//     }
// }

// Given('User navigates to the application', async function () {
//     await fixture.page.goto(testdata.Environment);
//     fixture.logger.info("Navigated to the application")
//     Base = new common_methods(fixture.page)
// })

// Given('User click on the login link', async function () {
//     await fixture.page.route('/*', route => route.continue());

// const responses: Response[] = [];

// fixture.page.on('response', (response: Response) => {

// const url = response.url();

// const resourceType = response.request().resourceType();

// // Filter out non-API calls, adjust the conditions based on your API patterns

// if (resourceType === 'xhr' || resourceType === 'fetch') {

// responses.push(response);

// logURLToExcel(`Captured ${resourceType} request: $(url) Status: ${response.status()}'`);

// }

// })
//     await fixture.page.click(Page_Object.Text.login);
// });

// Given('User enter the username', async function () {
//     await fixture.page.click(Page_Object.Text.username);
//     await fixture.page.fill(Page_Object.Text.username, testdata.username);
// });

// Given('User enter the password', async function () {
//     await fixture.page.click(Page_Object.Text.password);
//     await fixture.page.fill(Page_Object.Text.password,testdata.password);
// })

// When('User click on the login button', async function () {
//     await fixture.page.click(Page_Object.Text.login_button);
//     await fixture.page.waitForLoadState();
//     console.log("user successfully login")
//     await fixture.page.waitForTimeout(3000);

// });

// Then('User able to enter into the Book Cart page', async function() {
//   const text = await fixture.page.textContent(Page_Object.Text.Book_cart);
//   console.log(text);
//   await fixture.page.waitForTimeout(3000);
// });

// Then('User able to click on the Search button', async function() {
//     await fixture.page.click(Page_Object.Text.Search);
    
// });

// Then('Enter Harripoter to select the book name', async function() {
//     await fixture.page.fill(Page_Object.Text.Search,testdata.Book_name);
//     await fixture.page.waitForTimeout(2000);

// });


// Then('Select a book from the list', async function() {
//     await fixture.page.keyboard.press("ArrowDown");
//     await fixture.page.keyboard.press("Enter");
//     await fixture.page.waitForTimeout(3000);
// });


// Then('Click on the book for details', async function() {
//     await fixture.page.click(Page_Object.Text.Book);
//     await fixture.page.waitForTimeout(3000);
    
// });


// Then('Print the details of book', async function() {
//     await fixture.page.waitForTimeout(2000);
//     await fixture.page.waitForSelector('//mat-card-content/div/table/tbody/tr[1]');

//     const rows = await fixture.page.$$('//mat-card-content/div/table/tbody/tr');
//     if (rows.length > 0) {
//         for (let i = 0; i < rows.length; i++) {
//             await fixture.page.waitForTimeout(1000);
//             const rowText = await rows[i].innerText();  
//             console.log(rowText);  
//             console.log("-----------------------------------------------");
//         }
//     } else {
//         console.log("No records available");
//     }
// });



import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { Page, Browser, expect, Response } from "@playwright/test";
import * as testdata from "D:/Namratha Sri Projects/Playwright_automation/src/main/testdata/testdata.json";
import ExcelJS from "exceljs";
import { fixture } from "../../test/hooks/Pagefixture";
import { common_methods } from "../Base/Baseclass";
import Page_Object from "../Locator/PageObject";

setDefaultTimeout(120000);

let Base: common_methods;

// Create a new workbook and sheets
const workbook = new ExcelJS.Workbook();
const worksheet = workbook.addWorksheet("Books");
const URLSheet = workbook.addWorksheet("URLS");

// Add headers to the sheets
worksheet.addRow(["Book Details"]);
worksheet.getColumn(1).width = 50;

URLSheet.addRow(["Web Requests"]);
URLSheet.getColumn(1).width = 100;

Given('Heading to the Book Cart excel data', async function(){
    // Apply styling to the heading row
    const heading = [" Book Cart "];
    worksheet.addRow(heading);
    logInfoToExcel("__________________________________________");
    worksheet.getColumn(1).width = 20;
    // Apply bold styling and center alignment to the heading cell
    const headingRow = worksheet.getRow(1);
    headingRow.getCell(1).font = { bold: true};
    headingRow.getCell(1).alignment = { vertical: 'middle', horizontal: 'center'} ;
    
});

// Log info to "Books" sheet
function logInfoToExcel(message: string) {
  console.log(message); // Log to console
  worksheet.addRow([message]); // Add to worksheet
}

// Log URLs to "URLS" sheet
function logURLToExcel(message: string) {
  console.log(message); // Log to console
  URLSheet.addRow([message]); // Add to worksheet
}

// Save the workbook with retries
async function saveWorkbookWithRetry(filepath: string, retryCount: number = 3) {
  for (let attempt = 1; attempt <= retryCount; attempt++) {
    try {
      await workbook.xlsx.writeFile(filepath);
      console.log("Workbook saved successfully.");
      break;
    } catch (error) {
      if (attempt === retryCount) {
        console.error("Failed to save workbook after multiple attempts:", error);
        throw error; // Re-throw error if all attempts fail
      }
      console.warn(`Attempt ${attempt} failed. Retrying...`);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait before retrying
    }
  }
}

// Step definitions
Given("User navigates to the application", async function () {
  await fixture.page.goto(testdata.Environment);
  fixture.logger.info("Navigated to the application");
  Base = new common_methods(fixture.page);
});

Then("User click on the login link", async function () {
  await fixture.page.route("/*", (route) => route.continue());

  const responses: Response[] = [];
  fixture.page.on("response", (response: Response) => {
    const url = response.url();
    const resourceType = response.request().resourceType();

    // Capture only API calls (XHR or Fetch)
    if (resourceType === "xhr" || resourceType === "fetch") {
      responses.push(response);
      logURLToExcel(`Captured ${resourceType} request: ${url} | Status: ${response.status()}`);
    }
  });

  await fixture.page.click(Page_Object.Text.login);
});

Given("User enter the username", async function () {
  await fixture.page.click(Page_Object.Text.username);
  await fixture.page.fill(Page_Object.Text.username, testdata.username);
});

Given("User enter the password", async function () {
  await fixture.page.click(Page_Object.Text.password);
  await fixture.page.fill(Page_Object.Text.password, testdata.password);
});

When("User click on the login button", async function () {
  await fixture.page.click(Page_Object.Text.login_button);
  await fixture.page.waitForLoadState();
  console.log("User successfully logged in");
  await fixture.page.waitForTimeout(3000);
});

Then("User able to enter into the Book Cart page", async function () {
  const text = await fixture.page.textContent(Page_Object.Text.Book_cart);
  console.log(text);
  await fixture.page.waitForTimeout(3000);
});

Then("User able to click on the Search button", async function () {
  await fixture.page.click(Page_Object.Text.Search);
});

Then("Enter Harry Potter to select the book name", async function () {
  await fixture.page.fill(Page_Object.Text.Search, testdata.Book_name);
  await fixture.page.waitForTimeout(2000);
});

Then("Select a book from the list", async function () {
  await fixture.page.keyboard.press("ArrowDown");
  await fixture.page.keyboard.press("Enter");
  await fixture.page.waitForTimeout(3000);
});

Then("Click on the book for details", async function () {
  await fixture.page.click(Page_Object.Text.Book);
  await fixture.page.waitForTimeout(3000);
});

Then("Print the details of the book", async function () {
  await fixture.page.waitForTimeout(2000);
  await fixture.page.waitForSelector("//mat-card-content/div/table/tbody/tr[1]");

  const rows = await fixture.page.$$("//mat-card-content/div/table/tbody/tr");
  if (rows.length > 0) {
    for (let i = 0; i < rows.length; i++) {
      await fixture.page.waitForTimeout(1000);
      const rowText = await rows[i].innerText();
      console.log(rowText);
      logInfoToExcel(rowText); // Add row text to the Excel sheet
    }
  } else {
    console.log("No records available");
  }

  // Save the workbook after printing details
  await saveWorkbookWithRetry("D:/Namratha Sri Projects/Playwright_automation/BookDetails.xlsx");
});
