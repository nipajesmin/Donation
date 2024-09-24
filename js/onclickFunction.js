document.getElementById('donation-btn')
    .addEventListener('click', function () {
        showSectionById('donation-part');

        // Change the background color of the clicked button
    document.getElementById('donation-btn').style.backgroundColor = 'rgb(180, 244, 97)';
    
    // Reset the background color of the history button
    document.getElementById('history-btn').style.backgroundColor = '';
    });


document.getElementById('history-btn')
    .addEventListener('click', function () {
        showSectionById('history-part');

        // Change the background color of the clicked button
    document.getElementById('history-btn').style.backgroundColor = 'rgb(180, 244, 97)';
    
    // Reset the background color of the donation button
    document.getElementById('donation-btn').style.backgroundColor = '';
    });

    