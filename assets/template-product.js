console.log('this is product js');

class VariantSelector extends HTMLElement {
    constructor(){
        super();
        this.addEventListener("change", this.onVariantChange);

        console.log("This is a product page");
    }

    onVariantChange(){
        console.log("Variant has been changed");
        //this.getSelectedOptions();
    }

    getSelectedOptions(){
        this.options = Array.from(this.querySelectorAll('select'), (select) => select.value);
        console.log(this.options);
    }

}

customElements.define("variant-selector", VariantSelector);
console.log("The bottom script of the product page");

// produc script for chaning the variants and select the the product when the varinat has been selected
// custom script for the shopofy scirpt for the product page
// workin on the shopify cli 2.0 for the new product template
