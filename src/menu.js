import { BasePage } from "./base.js";
import MenuImg from "./images/cartas-de-kebab.jpg";

class MenuPage extends BasePage {
    
    title = "Menu";

    constructor() {
        super(MenuPage.title);
    }

    MenuDisplay() {
        const contentElement = this.getDOMElement("#content");
        contentElement.innerHTML = "";
        this.setTitle();
        const h2Home = this.createTextElement(
            "h2",
            "menu-subheader",
            "Here are our tasty dishes"
        );
        const imgHome = this.createImgElement(
            "menu-img",
            MenuImg
        );
        const pHome = this.createTextElement(
            "p",
            "home-p",
            "All the sundays 2x1 in all, \
            of our products."
        );

        this.appendElementToDOM(contentElement, h2Home);
        this.appendElementToDOM(contentElement, imgHome);
        this.appendElementToDOM(contentElement, pHome);
    }
}

export function exportMenu() {
    const menuPage = new MenuPage();
    menuPage.MenuDisplay();
}