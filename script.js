let section1 = document.getElementById('section-1');
let toggleNavBtn = document.getElementById('toggle-person-nav');
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
    if (bodyPart != 'person') backBtn.style.display = 'initial';
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

function togglePersonNav() {
    
}

toggleNavBtn.addEventListener('click', () => {
    if (section1.classList.contains('show-nav')) section1.classList.remove('show-nav');
    else section1.classList.add('show-nav');
});

window.addEventListener('load', () => {
    // Delay the fade-in animation by 4 seconds on page load
    setTimeout(function() {
        Array.from(document.getElementsByClassName('circle')).forEach(cir => cir.classList.add('fade-in'));
        Array.from(document.getElementsByClassName('line')).forEach(lin => lin.classList.add('fade-in'));
    }, 4000);
});
