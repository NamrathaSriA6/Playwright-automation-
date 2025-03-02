import { userInfo } from "os";
import { generate } from "multiple-cucumber-html-reporter";
import { browser } from "protractor";

generate({
    jsonDir: "test-results",
    reportPath: "test-results/reports/",
    reportName: "Playwright Automation Report",
    pageTitle: "Internship Automation",
    displayDuration: true,
    metadata: {
        browser: {
            name: "chromium",
            version: "122",
        },
        device: userInfo(), // Call userInfo() function to get user information
        platform: {
            name: "Windows",
            version: "11",
        },
    },
    customData: {
        title: "Test Info",
        data: [
            { label: "Project", value: "EIP4 EPM" },
            { label: "Release", value: "1" },
            { label: "Cycle", value: "Smoke" }
        ],
    },
});
