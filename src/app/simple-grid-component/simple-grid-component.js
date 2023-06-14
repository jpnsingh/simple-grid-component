export class SimpleGridComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        console.log('SimpleGridComponent added to page.');
        fetch("app/simple-grid-component/simple-grid-component.html")
            .then(stream => stream.text())
            .then(template => this.render(template))
            .catch((error) => console.log(error));
    }

    render(templateHtml) {
        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.innerHTML = templateHtml;
        this.bindEvents(shadowRoot);
    }

    bindEvents(shadowRoot) {
        
    }

    disconnectedCallback() {
        console.log('SimpleGridComponent removed from the page.');
    }

    static get observedAttributes() {
        return [];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        
    }

    adoptedCallback() {

    }

}

customElements.define('simple-grid-component', SimpleGridComponent);

