/* eslint-disable func-names */
const menuicon = document.querySelector('#menuicon');
const closeicon = document.querySelector('#closed');
const menu = document.querySelector('#menu-');
const menulist = document.querySelector('#mlist');
menuicon.onclick = function () {
  menu.style.display = 'block';
  menuicon.style.display = 'block';
};
closeicon.onclick = function () {
  menu.style.display = 'none';
};
menulist.onclick = function () {
  menu.style.display = 'none';
};
const adddata = [
  {
    id: 1,
    name: 'David',
    caption: '<br>Lorem ipsum dolor sit amet consectetur.',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. ',
    img: 'https://randomuser.me/api/portraits/men/75.jpg',
  },
  {
    id: 2,
    name: 'Richal',
    caption: '<br>Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. ',
    img: 'https://randomuser.me/api/portraits/women/50.jpg',
  },
  {
    id: 3,
    name: 'Robert',
    caption: '<br>Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    img: 'https://randomuser.me/api/portraits/men/40.jpg',
  },
  {
    id: 4,
    name: 'Alice',
    caption: '<br>Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    img: 'https://randomuser.me/api/portraits/women/60.jpg',
  },
  {
    id: 5,
    name: 'John Doe',
    caption: '<br>Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    img: 'https://randomuser.me/api/portraits/men/70.jpg',
  },
  {
    id: 6,
    name: 'Michael',
    caption: '<br>Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    img: 'https://randomuser.me/api/portraits/women/40.jpg',
  },
];

const speakerData = (x) => `
<div class="speaker-image">
<img src='./assets/images/speaker-bg-image.jpg' alt='speaker-image' class='bg-img'>
<img src=${adddata[x].img} alt='speaker-image' class='avatar'></div>
<div class="speaker-content">
  <h2 class="speaker-name">${adddata[x].name}</h2>
  <p class='caption'>${adddata[x].caption}</p>
  <hr>
  <p class="speaker-profile">${adddata[x].desc}</p>
</div>
`;
const Allspeakers = document.querySelector('.row');
const displaytwo = () => {
  for (let i = 0; i < 2; i += 1) {
    const speaker = document.createElement('div');
    speaker.classList.add('feature-card');
    speaker.innerHTML = speakerData(i);
    Allspeakers.appendChild(speaker);
  }
};
const displayAll = () => {
  Allspeakers.innerHTML = ' ';
  for (let i = 0; i < Object.keys(adddata).length; i += 1) {
    const speaker = document.createElement('div');
    speaker.classList.add('feature-card');
    speaker.innerHTML = speakerData(i);
    Allspeakers.appendChild(speaker);
  }
};

const more = document.getElementById('btn-more');
const less = document.getElementById('btn-less');

more.addEventListener('click', () => {
  more.style.display = 'none';
  less.style.display = 'block';
  displayAll().style.display = 'block';
  displaytwo().style.display = 'none';
});

less.addEventListener('click', () => {
  more.style.display = 'block';
  less.style.display = 'none';
  displayAll().style.display = 'none';
  displaytwo().style.display = 'block';
});

function myscreen(x) {
  if (x.matches) {
    displaytwo();
  } else {
    displayAll();
  }
}
const x = window.matchMedia('(max-width: 768px)');
myscreen(x);
x.onchange(myscreen);
