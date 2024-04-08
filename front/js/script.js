document.getElementById('changeMessage').addEventListener('click', function() {
    if (counterValue % 2 == 0) {
        document.getElementById('greeting').innerHTML = 'dijo la bola';
    } else {
        document.getElementById('greeting').innerHTML = 'gei :3';
    }
    counterValue++;
});

//var vs let
let counterValue = 0;
document.getElementById('increment').addEventListener('click', function() {
    document.getElementById('counter').innerHTML = counterValue;
    incrementCounter();
});

// incrementCounter

function incrementCounter() {
    counterValue++;
}