import { BasePage } from "./base.js";
import MenuImg from "./images/cartas-de-kebab.jpg";

export class HomePage extends BasePage {
    
    title = "Home";

    constructor() {
        super(HomePage.title);
    }

    homeDisplay() {
        this.setTitle();
        const contentElement = this.getDOMElement("#content");
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
            MenuImg
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