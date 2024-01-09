function start() {
    let button1 = document.getElementById("button1");
    button1.onclick = toggleContent;
}

function toggleContent() {
    let number = +document.getElementById('number').value; // take value as a number
    let liquid = document.getElementById('Bar');

    if (isNaN(number) || number < 0) { // move exit condition to top and exit early
        alert("Invalid Entry. Enter a Number.")
        return;
    }

    if (number < 18) { // condition without parseint 
        liquid.src = 'images/baby.jpg';
        liquid.alt = 'You are a child';
        

    } else { // no need for another check
        liquid.src = 'images/adult.jpg';
        liquid.alt = 'You are an adult';

    }
}

window.onload = start;