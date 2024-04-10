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

// Form function to send the name to the API server

document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;

    fetch('http://localhost:3000/api/customG', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name: name}) //llave: variable
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('serverResponse').innerHTML = data.greeting;
        })
});