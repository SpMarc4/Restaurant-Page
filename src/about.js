import { BasePage } from "./base.js";

class AboutPage extends BasePage {
    title = "About";

    constructor() {
        super(AboutPage.title);
    }

    aboutDisplay() {
        this.setTitle();
        const contentElement = this.getDOMElement("#content");
        contentElement.innerHTML = "";
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

        this.appendElementToDOM(content, name);
        this.appendElementToDOM(content, mail);
        this.appendElementToDOM(content, address);
    }
}

export function exportAbout() {
    const aboutPage = new AboutPage();
    aboutPage.aboutDisplay()
}