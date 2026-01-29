let section1 = document.getElementById('section-1');
let backBtn = document.getElementById('back-btn');
let head = document.getElementById('head');
let rightHand = document.getElementById('right-hand');
let leftHand = document.getElementById('left-hand');
let rightEye = document.getElementById('right-eye');
let leftEye = document.getElementById('left-eye');

let prevView = 'show-person';

function changeView(bodyPart) {
    section1.classList.remove(prevView);
    section1.classList.add('show-' + bodyPart);
    prevView = 'show-' + bodyPart;
}

head.addEventListener('click', () => changeView('head'));
rightHand.addEventListener('click', () => changeView('right-hand'));
leftHand.addEventListener('click', () => changeView('left-hand'));
rightEye.addEventListener('click', () => changeView('right-eye'));
leftEye.addEventListener('click', () => changeView('left-eye'));

function showPerson() {
    changeView('person');
    backBtn.style.display = 'none';
}
