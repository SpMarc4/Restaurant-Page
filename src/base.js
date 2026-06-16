export class BasePage {
    
    constructor(title){
        this.title = title;
    }

    createTextElement(type, id, content)  {
        const element = document.createElement(`${type}`);
        element.setAttribute('id', id);

        if(type.startsWith('h') || type === "p") {
            element.textContent = content;
        }
        else {
            throw new Error(
-                "Only the following types are accepted:\
-                - p\
-                - header, h1, h2, h3, h4, h5, h6"
            );
        };

        return element;
    };

    createImgElement(id, content) {
        const element = document.createElement('img');
        element.setAttribute('id', id);
        
        element.src = content;

        return element;
    }

    appendElementToDOM(father, child) {
        father.appendChild(child); 
    }

    getDOMElement(element) {
        return document.querySelector(element);
    }
    
    setTitle() {
        const titleElement = this.createTextElement('h1',
            'title',
            this.title
        );

        const contentElement = this.getDOMElement("#content");

        this.appendElementToDOM(contentElement, titleElement)
    }
}