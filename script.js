var images = [
    './pictures/got\ 4k\ 4.jpg',
    './pictures/got\ 4k\ 2.jpg',
    './pictures/got\ 4k\ 3.webp'
];

function changeBackground() {
    var randomNumber = Math.floor(Math.random() * images.length);
    var randomImage = images[randomNumber];
    document.body.style.backgroundImage = 'url(' + randomImage + ')';
}



function updateTimer() {
    var targetTime = new Date(); // Get current time
    targetTime.setDate(targetTime.getDate() + 1); // Set target date to tomorrow
    targetTime.setHours(18);     // Set desired hour
    targetTime.setMinutes(0);    // Set desired minute
    targetTime.setSeconds(0);    // Set desired seconds

    var now = new Date();        // Get current time
    var diff = (targetTime - now) / 1000; // Calculate difference in seconds

    if (diff <= 0) {
        // Timer expired
        var timerDisplay = document.getElementById('timer');
        timerDisplay.textContent = 'Game of Thrones time!';
        return;
    }

    var hours = Math.floor(diff / 3600);  // Calculate remaining hours
    var minutes = Math.floor((diff % 3600) / 60); // Calculate remaining minutes
    var seconds = Math.floor(diff % 60);    // Calculate remaining seconds

    var timerDisplay = document.getElementById('timer');
    timerDisplay.textContent = ' ' + hours + 'h ' + minutes + 'm ' + seconds + 's';
}

// Update timer every second
setInterval(updateTimer, 1000);

// Initial update
updateTimer();

// Change background every 10 minutes (600000 milliseconds)
setInterval(changeBackground, 600000);

// Initial change
changeBackground();




