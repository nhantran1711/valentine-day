function selectOption(option) {
    if (option === 'yes') {
        // Flash function
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


