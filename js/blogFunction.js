function toggleAnswer(index) {
    const answers = document.querySelectorAll('.faq-answer');
    const arrows = document.querySelectorAll('.arrow');

    // Toggle the visibility of the answer
    answers[index].classList.toggle('hidden');

    // Change the arrow direction
    if (answers[index].classList.contains('hidden')) {
        arrows[index].innerHTML = '&#9654;'; // Pointing right
    } else {
        arrows[index].innerHTML = '&#9660;'; // Pointing down
    }
}