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
