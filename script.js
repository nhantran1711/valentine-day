function selectOption(option) {
    if (option === 'yes') {
        // Upload the cat
        document.getElementById('question').style.display = 'none'; // Hide the question
        document.getElementById('options').style.display = 'none';
        document.getElementById('catImage').style.display = 'none';
        displayYesCat();
        document.getElementById('options').style.display = 'block';
        document.getElementById('options').innerHTML = 'Yayyyyy I love youuuuu <3 ';
        document.getElementById('options').style.fontFamily = 'Sacramento, cursive';
        document.getElementById('options').style.fontSize = '57px';
    } 
    else if (option === 'no') {
        var noResponses = ["U sureee?", "Plssss noooo", "Pretty pleaseeeee", "Noooooooo"];
        var images = ["giphy-2.gif", "giphy-3.gif", "giphy-4.gif", "giphy-5.gif"];
        var noButton = document.getElementById('no-button');
        var catImage = document.getElementById('catImage');
        var yesButton = document.getElementById('yes-button'); 
        let index = localStorage.getItem('index') ? parseInt(localStorage.getItem('index')) : 0;
        // Change text and image each time "No" is clicked
        
        noButton.innerText = noResponses[index];
        catImage.src = images[index];
    
        index = (index + 1) % noResponses.length; // Cycle through responses
        // Increase "Yes" button size
        var currentYesButton = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentYesButton) * 2;
        yesButton.style.fontSize = newSize + 'px';
        localStorage.setItem('index', index);
    }
    
    else {
        // Show an alert 
        alert('Invalid!')
    }
} 

function displayYesCat() {
    var imageContainer = document.getElementById('image-container');

    var cat = new Image();
    cat.src = 'giphy.gif'; 
    cat.alt = 'happy-cat';
    cat.onload = function() {
        imageContainer.appendChild(cat);
    };

};


function displayCat() {
    var imageContainer = document.getElementById('image-container');

    var questionCat = new Image();
    questionCat.src = 'giphy-1.gif';
    questionCat.alt = 'Heart Cat';
    questionCat.onload = function() {
        imageContainer.appendChild(questionCat);
    };
};