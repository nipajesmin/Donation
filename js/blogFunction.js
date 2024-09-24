function toggleAnswer(index) {
    const answers = document.querySelectorAll('.faq-answer');
    const arrows = document.querySelectorAll('.arrow');

    answers[index].classList.toggle('hidden');

    if (answers[index].classList.contains('hidden')) {
        arrows[index].innerHTML = '&#9654;'; 
    } else {
        arrows[index].innerHTML = '&#9660;'; 
    }
}