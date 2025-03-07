let list = document.querySelectorAll('.item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

// count = 3
// 0, 1, 2
// active = 0

let cout = list.length;
let active = 0;

next.onclick = () => {
    let activeOld = document.querySelector('.active');
    activeOld.classList.remove('active');

    active = active >= cout - 1 ? 0 : active + 1;
    list[active].classList.add('active');
}

prev.onclick = () => {
    let activeOld = document.querySelector('.active');
    activeOld.classList.remove('active');

    active = active <= 0 ? cout - 1 : active - 1;
    list[active].classList.add('active');
}


document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.carrosel-item');
    let currentIndex = 0;

    function showNextItem() {
        items[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % items.length;
        items[currentIndex].classList.add('active');
    }

    items[currentIndex].classList.add('active');
    setInterval(showNextItem, 3000); // Muda de item a cada 3 segundos
});


