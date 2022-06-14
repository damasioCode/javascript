
function handleMouseMove( {clientX, clientY} ) {

    // get the mouse position
    // const clientX = event.clientX;
    // const clientY = event.clientY;
    
    // destructuring the event object
    // const { clientX, clientY } = event;

    console.log(clientX, clientY);
}
// document.addEventListener( 'mousemove', handleMouseMove );

const useState = [
    'blue',
    function( color ) {
        useState[0] = color;
    }
];

const [color, setColor] = useState;
console.log(color);
setColor('red');