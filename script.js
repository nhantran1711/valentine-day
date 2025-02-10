function selectOption(option) {
    if (option === 'yes') {
        // Upload the cat
        document.getElementById('question').style.display = 'none'; // Hide the question
        document.getElementById('options').style.display = 'none';
        displayYesCat();
        document.getElementById('options').style.display = 'block';
        document.getElementById('options').innerHTML = 'Yayyyyy I love youuuuu <3 ';
        document.getElementById('options').style.fontFamily = 'Sacramento, cursive';
        document.getElementById('options').style.fontSize = '57px';
    } 
    else if (option === 'no') {
        // Change text to "U sure?"
        document.getElementById('no-button').innerText = 'U sure?';

        // Yes option size increase
        var yesButton = document.getElementById('yes-button');
        var currentYesButton  = window.getComputedStyle(yesButton).getPropertyValue('font-size')
        
        var newSize = parseFloat(currentYesButton) * 2;
        yesButton.style.fontSize = newSize + 'px';

    } else {
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
