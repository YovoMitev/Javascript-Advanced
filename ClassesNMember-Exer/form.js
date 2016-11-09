let result = (function() {

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

    class Form{
        constructor(){
            for(let obj of arguments){
                if(!(obj instanceof Textbox))
                    throw new Error('Obj must be Textbox class')
            }
            this._element = $('<div>').addClass('form');
            this._textboxes = [];
            for(let obj of arguments){
                this._element.append(obj.elements);
                this._textboxes.push(obj);
            }
        }
        submit(){
            let boolean = true;
            for(let textbox of this._textboxes){
                if(textbox.isValid())
                    textbox.elements.css('border','2px solid green');
                else{
                    textbox.elements.css('border','2px solid red');
                    boolean = false;
                }
            }
            return boolean;
        }
        attach(selector){
            $(selector).append(this._element)
        }
    }

    return {
        Textbox: Textbox,
        Form: Form
    }
}());

let Textbox = result.Textbox;
let Form = result.Form;
let username = new Textbox("#username",/[^a-zA-Z0-9]/);
let password = new Textbox("#password",/[^a-zA-Z]/);
username.value = "username";
password.value = "password2";
let form = new Form(username,password);
form.attach("#root");
