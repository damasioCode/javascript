//function in variable
const sayHello = function( name ) {
    return `Hello ${name}!`;
};

//arrow function in variable
const countLetters = words => {
    return words.length;
}; 
//console.log(countLetters('Damasio')); // 7

//class menu
class Menu {
    constructor( menu ) {
        
        //properties of class
        this.menuElement = document.querySelector( menu );
        this.activeClass = 'active';

    }

    //method of class
    addActiveEvent() {

        //this references the class
        this.menuElement.addEventListener( 'click', event => {
            //console.log( this );
            event.target.classList.toggle( this.activeClass );
        });

    }
}

//instantiate the class
const menu = new Menu( '.primary-menu' );
menu.addActiveEvent();

alert( sayHello('Damasin') );