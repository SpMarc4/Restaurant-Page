import "./style.css";
import { exportHome } from "./home.js";
import { exportMenu } from "./menu.js";
import { exportAbout } from "./about.js";

console.log("¡Funcionando!")

const HOMEBUTTON = document.getElementById('home-btn');
const MENUBUTTON = document.getElementById('menu-btn');
const ABOUTBUTTON = document.getElementById('about-btn');


function entryPointExecution() {
    exportHome();

    HOMEBUTTON.addEventListener("click", () => {
        exportHome();
    })
    
    MENUBUTTON.addEventListener("click", () => {
        exportMenu();
    })
    
    ABOUTBUTTON.addEventListener("click",  () => {
        exportAbout();
    })
};

entryPointExecution();
