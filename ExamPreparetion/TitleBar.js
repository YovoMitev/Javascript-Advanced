
class TitleBar{
     constructor(title){
         this.title = title;
         this.links =  $('<nav>');
     }

     _genereteHTML(){
         let header = $('<header>').addClass('header');
         let headRow = $('<div>').addClass('header-row');
         let drawer = $('<div>').addClass('drawer');

         let button = $('<a>').addClass('button').html('&#9776;');
         button.click(function () {
             $('div.drawer').toggle();
         });

         let span = $('<span>').addClass('title').text(this.title);

         drawer.append(this.links);
         headRow.append(button).append(span);

         header.append(headRow).append(drawer);

         return header
     }

     addLink(href,name){
         let newElem = $('<a>').attr('href',href).text(name);
         newElem.addClass('menu-link');
         this.links.append(newElem);
     }

     appendTo(selector){
         $(selector).append(this._genereteHTML());
     }
}

let elem = new TitleBar('Test');
elem.addLink('/','Home');
elem.addLink('/','Home');
elem.addLink('/home','Hommie');
elem.addLink('/home','Hommie');
elem.appendTo('#container');

