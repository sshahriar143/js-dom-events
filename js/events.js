// option 1
console.log('This is sepratae js file');

// option 2 add onclick function
function makeRed() {
    document.body.style.backgroundColor = 'red'
}

// option 3
const makeBlueButton = document.getElementById('make-blue');
    makeBlueButton.onclick = makeBlue;
    
    function makeBlue(){
        document.body.style.backgroundColor = 'blue'
    }

    // option 4
    const makePurpleButton = document.getElementById('make-purple');
    makePurpleButton.onclick =function makePurple(){
        document.body.style.backgroundColor = 'purple'
    }

    // option 5
    const pinkButton = document.getElementById('make-pink');
    pinkButton.addEventListener('click', makePink)
    function makePink(){
        document.body.style.backgroundColor = 'pink'
    }

    // option 6
    const greenButton = document.getElementById('make-green');
    greenButton.addEventListener('click',  function makeGreen(){
        document.body.style.backgroundColor = 'green'
    } )