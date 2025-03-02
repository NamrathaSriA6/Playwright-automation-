export default class Page_Object {
    public static Text = {
        login:"//span[text()=' Login ']",
        username:"input[formcontrolname='username']",
        password:"input[formcontrolname='password']",
        login_button:"//span[text()='Login']",
        Book_cart:"//span[text()=' Book Cart ']",
        Search:"//input[@placeholder='Search books or authors']",
        Option:'//mat-option[@role="option"]',
        Book: '//a[@class="mat-mdc-tooltip-trigger"]'
    }
}