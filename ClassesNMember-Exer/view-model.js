class Textbox {
    constructor(selector,regex){
        this._elements = $(selector);
        this._validateRegex = regex;

        let that = this;
        this.elements.on('input',function () {
            that.value = $(this).val();
        })
    }
    isValid(){
        return !this._validateRegex.test(this.value)
    }

    get elements (){
        return this._elements;
    }
    get value(){
        return this._value;
    }
    set value(text){
        this.elements.val(text);
        this._value = text;
    }
}
let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = $('.textbox');
//textbox.value = "$@@@#"
//console.log(textbox.isValid());


inputs.on('input',function(){console.log(textbox.value);});
