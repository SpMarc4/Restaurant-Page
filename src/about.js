import { BasePage } from "./base.js";

class AboutPage extends BasePage {
    title = "About";

    constructor() {
        super(AboutPage.title);
    }

    aboutDisplay() {
        const contentElement = this.getDOMElement("#content");
        contentElement.innerHTML = "";
        this.setTitle();
        const name = this.createTextElement(
            'p',
            'name',
            'Name: Sultan Kebab'
        );
        const mail = this.createTextElement(
            'p',
            'mail',
            'Mail: sultan@kebab.com'
        );
        const address = this.createTextElement(
            'p',
            'address',
            'Address: C/123 Barcelona'
        );

        this.appendElementToDOM(contentElement, name);
        this.appendElementToDOM(contentElement, mail);
        this.appendElementToDOM(contentElement, address);
    }
}

export function exportAbout() {
    const aboutPage = new AboutPage();
    aboutPage.aboutDisplay()
}