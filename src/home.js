import { BasePage } from "./base.js";
import Durum from "./images/durum.jpg";

class HomePage extends BasePage {
    
    title = "Home";

    constructor() {
        super(HomePage.title);
    }

    homeDisplay() {
        const contentElement = this.getDOMElement("#content");
        contentElement.innerHTML = "";
        this.setTitle();
        const h1Home = this.createTextElement(
            "h1",
            "home-header",
            "Sultan Kebab"
        );
        const h2Home = this.createTextElement(
            "h2",
            "home-subheader",
            "The best kebab in the world"
        );
        const imgHome = this.createImgElement(
            "menu-img",
            Durum
        );
        const pHome = this.createTextElement(
            "p",
            "home-p",
            "Discover our delicious durum, \
            pita, falafel, pizza and more"
        );

        this.appendElementToDOM(contentElement, h1Home);
        this.appendElementToDOM(contentElement, h2Home);
        this.appendElementToDOM(contentElement, imgHome);
        this.appendElementToDOM(contentElement, pHome);
    }
}

export function exportHome() {
    const homePage = new HomePage();
    homePage.homeDisplay();
}