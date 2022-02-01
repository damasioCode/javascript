
//literal object
const menu = {
    selector: '.primary-menu',
    init: function() {
        //declare a method
        console.log('hello world');
    },
    active() {
        //simplest way to declare a method;
        this.init(); //execute a method
        const menuElement = document.querySelector(this.selector);        
        menuElement.classList.add('active');
    }
}

console.log ( menu.selector );
menu.active(); //add active class to primary-menu
menu.hasOwnProperty( 'selector' ); //inherited method
