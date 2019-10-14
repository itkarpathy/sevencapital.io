/* eslint-disable no-alert, no-console */

import './index.html';
import './index.scss';
import './scripts/script.js';
import { networkInterfaces } from 'os';
// import { isContext } from 'vm';

/* The flag that determines whether the wheel event is supported. */

/* The function that will run when the events are triggered. */

// const text = document.querySelector('.w-test');
const nav = document.querySelector('.navbar');
const contact = document.querySelector('#btn-side');
const close = document.querySelector('.close-btn');
const burger = document.querySelector('.icon');
const links = document.querySelectorAll('.menu-right li');
const openTab = document.querySelector('.container');

burger.addEventListener('click', e => {
  nav.classList.toggle('open');
});

links.forEach(link => {
  link.addEventListener('click', e => {
    nav.classList.remove('open');
  });
});

// contact-form: //

function custom() {
  openTab.classList.add('active');
}

function closeBtn() {
  openTab.classList.remove('active');
}

contact.addEventListener('click', custom);
close.addEventListener('click', closeBtn);

/////////////////////////
///* sticky navbar *//

function scrollCheck() {
  return window.pageYOffset;
}
window.addEventListener('scroll', scrollCheck);

function sticky() {
  const sc = scrollCheck();

  if (sc >= 10 && window.innerWidth > 675) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
}

var tl = new TimelineMax({ onUpdate: updatePercentage });
var tl2 = new TimelineMax();
var tl3 = new TimelineMax();
var tl4 = new TimelineMax();
var tl5 = new TimelineMax();
var tl6 = new TimelineMax();
var tl7 = new TimelineMax();
var tl8 = new TimelineMax();
var tl9 = new TimelineMax();
var tl10 = new TimelineMax();
var tl11 = new TimelineMax();
var tl12 = new TimelineMax();
var tl13 = new TimelineMax();
var tl14 = new TimelineMax();
var tl15 = new TimelineMax();
var tl16 = new TimelineMax();
var tl17 = new TimelineMax();
var tl18 = new TimelineMax();
var tl19 = new TimelineMax();
var tl20 = new TimelineMax();
var tl21 = new TimelineMax();
var tl22 = new TimelineMax();
var tl23 = new TimelineMax();
var tl24 = new TimelineMax();

const controller = new ScrollMagic.Controller({ addIndicators: true });

new ScrollMagic.Scene().addTo(controller);
tl24.from('#nav', 100, { background: '#ab9548' });
tl24.to('#nav', 100, { background: 'rgba(0,0,0,.5)' });
tl23.from('#nav', 100, { background: '#ab9548' });
tl23.to('#nav', 100, { background: '#ab9548' });

tl22.from('#nav', 100, { background: '' });
tl22.from('#nav', 100, { background: '#ab9548' });

tl.from('blockquote', 1, { x: -400, opacity: 0 });
tl.from('.box-img', 1, { x: 300, opacity: 0, scale: '1.2' });
tl.from('span', 1, { width: 0 }, '=-.5');
tl.from('#img-1', 1, { x: -250, opacity: 0 }, '=-1');
tl.from('#img-2', 1, { x: 200, opacity: 0 }, '=-1');
tl3.from('#f10', 500, { x: 200, opacity: 0 }, '=-1');
tl3.from('#f09', 600, { x: -200, opacity: 0 }, '=-1');
tl3.from('#f11', 400, { x: 200, opacity: 0 }, '=-1');

////////

// tl20.to('#nav', 3726, { background: '#ab9548' }, '=-1');
tl20.from('#nav', 3726, { background: '#ab9548' }, '=-1');
tl20.to('#nav', 4726, { background: 'rgba(0,0,0,.5)' }, '=-1');

tl21.to('#nav', 3726, { background: '#ab9548' }, '=-1');
tl21.from('#nav', 3726, { background: 'rgba(0,0,0,.5)' }, '=-1');
tl21.to('.btn-side', 3726, { border: '1px solid' }, '=-1');
// tl21.to('#btn-side', 3726, { border: '1px solid' }, '=-1');
////////
// tl19.from('#btn-side', 3726, { border: 'none' }, '=-1');
tl19.to('#btn-side', 2726, { border: '1px solid white' }, '=-1');

tl4.from('#pa-1', 3490, { x: 0, opacity: 0 }, '=-1');
tl4.from('#pa-2', 3610, { x: 0, opacity: 0 }, '=-1');
tl4.from('#pa-3', 3800, { x: 0, opacity: 0 }, '=-1');
tl4.from('#pa-4', 4000, { x: 0, opacity: 0 }, '=-1');
tl4.from('#pa-5', 4260, { x: 0, opacity: 0 }, '=-1');
tl4.from('#pa-1', 6490, { x: 0, opacity: 1 }, '=-1');
tl4.from('#pa-2', 5310, { x: 0, opacity: 1 }, '=-1');
tl4.from('#pa-3', 4240, { x: 0, opacity: 1 }, '=-1');
tl4.from('#pa-4', 3250, { x: 0, opacity: 1 }, '=-1');
tl4.from('#pa-5', 3260, { x: 0, opacity: 1 }, '=-1');
tl4.from('#pa-6', 4490, { x: 0, opacity: 0 }, '=-1');
tl4.from('#pa-7', 4310, { x: 0, opacity: 0 }, '=-1');
tl4.from('#pa-8', 4540, { x: 0, opacity: 0 }, '=-1');
tl4.from('#pa-9', 4650, { x: 0, opacity: 0 }, '=-1');
tl4.from('#pa-10', 4726, { x: 0, opacity: 0 }, '=-1');
tl4.from('#pa-6', 4490, { x: 0, opacity: 1 }, '=-1');
tl4.from('#pa-7', 4310, { x: 0, opacity: 1 }, '=-1');
tl4.from('#pa-8', 4540, { x: 0, opacity: 1 }, '=-1');
tl4.from('#pa-9', 4650, { x: 0, opacity: 1 }, '=-1');
tl4.from('#pa-10', 4726, { x: 0, opacity: 1 }, '=-1');

// tl4.from('#pa-6', 3490, { x: 0, opacity: 0 }, '=-1');
// tl4.from('#pa-7', 3310, { x: 0, opacity: 0 }, '=-1');
// tl4.from('#pa-8', 2240, { x: 0, opacity: 0 }, '=-1');
// tl4.from('#pa-9', 1250, { x: 0, opacity: 0 }, '=-1');
// tl4.from('#pa-10', 4260, { x: 0, opacity: 0 }, '=-1');
/////

// tl5.from('.bg3', 1, { backgroundColor: 'red' }, '=-1');
// tl5.from('.bg3 h3:last-child', 0.3, { transform: 'translateX(0%)' }, '=-1');
// tl5.from('.bg4', 1, { backgroundColor: 'green' }, '=-1');
tl6.from('.bg5', 1, { backgroundColor: 'grey' }, '=-1');
tl7.from('#p-1', 1490, { x: 0, opacity: 0 }, '=-1');
tl7.from('#p-2', 3310, { x: 0, opacity: 0 }, '=-1');
tl7.from('#p-3', 2240, { x: 0, opacity: 0 }, '=-1');
tl7.from('#p-4', 1250, { x: 0, opacity: 0 }, '=-1');
tl7.from('#p-5', 4260, { x: 0, opacity: 0 }, '=-1');
tl7.from('#p-6', 2700, { x: 0, opacity: 0 }, '=-1');
tl7.from('#p-7', 480, { x: 0, opacity: 0 }, '=-1');
tl7.from('#p-8', 5800, { x: 0, opacity: 0 }, '=-1');
tl7.to('#p-1', 1490, { x: 0, opacity: 0 }, '=-1');
tl7.to('#p-2', 1490, { x: 0, opacity: 0 }, '=-1');
tl7.to('#p-3', 2240, { x: 0, opacity: 0 }, '=-1');
tl7.to('#p-4', 1250, { x: 0, opacity: 0 }, '=-1');
tl7.to('#p-5', 4260, { x: 0, opacity: 0 }, '=-1');
tl7.to('#p-6', 2700, { x: 0, opacity: 0 }, '=-1');
tl7.to('#p-8', 5800, { x: 0, opacity: 0 }, '=-1');
tl7.from('#p-9', 1490, { x: 0, opacity: 0 }, '=-1');
tl7.from('#p-10', 3310, { x: 0, opacity: 0 }, '=-1');
tl7.from('#p-11', 2240, { x: 0, opacity: 0 }, '=-1');
tl7.from('#p-12', 1250, { x: 0, opacity: 0 }, '=-1');
tl7.from('#p-13', 4260, { x: 0, opacity: 0 }, '=-1');
tl7.from('#p-14', 2700, { x: 0, opacity: 0 }, '=-1');
tl7.from('#p-15', 480, { x: 0, opacity: 0 }, '=-1');
// tl8.from('.fix-box', 2480, { x: 0, opacity: 0 }, '=-1');
tl8.from('#imgOne', 3480, { x: -200, opacity: 0 }, '=-1');
tl8.from('#imgTwo', 4480, { x: -200, opacity: 0 }, '=-1');
tl17.from('#imgThree', 4580, { x: -200, opacity: 0 }, '=-1');
tl17.from('#imgFour', 4680, { x: -200, opacity: 0 }, '=-1');
tl17.from('#imgFive', 4780, { x: -200, opacity: 0 }, '=-1');
tl17.from('#imgSix', 4880, { x: -200, opacity: 0 }, '=-1');
tl18.from('#bg-c1', 4580, { x: 0, opacity: 0 }, '=-1');

////////////////////////////-----/////////////////

tl9.from('#img111', 300, { x: 0, opacity: 0 }, '=-1');
tl10.from('#img222', 300, { x: 0, opacity: 0 }, '=-1');
tl11.from('#img333', 300, { x: 0, opacity: 0 }, '=-1');
tl12.from('#img444', 300, { x: 0, opacity: 0 }, '=-1');
tl13.from('#img555', 300, { x: 0, opacity: 0 }, '=-1');
tl14.from('#img666', 300, { x: 0, opacity: 0 }, '=-1');
tl15.from('#img777', 300, { x: 0, opacity: 0 }, '=-1');
tl16.from('#img888', 300, { x: 0, opacity: 0 }, '=-1');
////////
const scene24 = new ScrollMagic.Scene({
  triggerElement: '.sec-8 .scroll-trigger8',
  triggerHook: 'onLeave',
  duration: '100%'
})

  .setPin('.sec-9 .navbar')
  .setTween(tl24)
  .addTo(controller);

const scene23 = new ScrollMagic.Scene({
  triggerElement: '.sec-5 .scroll-trigger-5-2',
  triggerHook: 'onLeave',
  duration: '100%'
})

  .setPin('.sec-5 .navbar')
  .setTween(tl23)
  .addTo(controller);

const scene22 = new ScrollMagic.Scene({
  triggerElement: '.sec-1',
  triggerHook: 'onLeave',
  duration: '100%'
})

  .setPin('.sec-1 .navbar')
  .setTween(tl22)
  .addTo(controller);

const scene21 = new ScrollMagic.Scene({
  triggerElement: '.sec-7',
  triggerHook: 'onLeave',
  duration: '100%'
})

  .setPin('.sec-7 .navbar')
  .setTween(tl21)
  .addTo(controller);

const scene20 = new ScrollMagic.Scene({
  triggerElement: '.sec-6 .trigger-6-1',
  triggerHook: 'onLeave',
  duration: '100%'
})

  .setPin('.trigger-6-2')
  .setTween(tl20)
  .addTo(controller);

const scene19 = new ScrollMagic.Scene({
  triggerElement: '.sec-6 .trigger-6-1',
  triggerHook: 'onLeave',
  duration: '100%'
})

  .setPin('.trigger-6-1')
  .setTween(tl19)
  .addTo(controller);

////////
const scene18 = new ScrollMagic.Scene({
  triggerElement: '.sec-3 .scroll-trigger-3-1',
  triggerHook: 'onLeave',
  duration: '100%'
})

  .setPin('.scroll-trigger-3-2')
  .setTween(tl18)
  .addTo(controller);

const scene17 = new ScrollMagic.Scene({
  triggerElement: '.sec-5 .scroll-trigger-5-1',
  triggerHook: 'onLeave',
  duration: '100%'
})

  .setPin('.scroll-trigger-5-2')
  .setTween(tl17)
  .addTo(controller);

const scene16 = new ScrollMagic.Scene({
  triggerElement: '.sec-8 .scroll-trigger8',
  triggerHook: 'onLeave',
  duration: '100'
})

  .setPin('.sec-8 .frame-box')
  .setTween(tl16)
  .addTo(controller);

const scene15 = new ScrollMagic.Scene({
  triggerElement: '.sec-8 .scroll-trigger7',
  triggerHook: 'onLeave',
  duration: '100'
})

  .setPin('.sec-8 .frame-box')
  .setTween(tl15)
  .addTo(controller);

const scene14 = new ScrollMagic.Scene({
  triggerElement: '.sec-8 .scroll-trigger6',
  triggerHook: 'onLeave',
  duration: '100'
})

  .setPin('.sec-8 .frame-box')
  .setTween(tl14)
  .addTo(controller);

const scene13 = new ScrollMagic.Scene({
  triggerElement: '.sec-8 .scroll-trigger5',
  triggerHook: 'onLeave',
  duration: '100'
})

  .setPin('.sec-8 .frame-box')
  .setTween(tl13)
  .addTo(controller);

const scene12 = new ScrollMagic.Scene({
  triggerElement: '.sec-8 .scroll-trigger4',
  triggerHook: 'onLeave',
  duration: '100'
})

  .setPin('.sec-8 .frame-box')
  .setTween(tl12)
  .addTo(controller);

const scene11 = new ScrollMagic.Scene({
  triggerElement: '.sec-8 .scroll-trigger3',
  triggerHook: 'onLeave',
  duration: '100'
})

  .setPin('.sec-8 .frame-box')
  .setTween(tl11)
  .addTo(controller);

const scene10 = new ScrollMagic.Scene({
  triggerElement: '.sec-8 .scroll-trigger2',
  triggerHook: 'onLeave',
  duration: '100'
})

  .setPin('.sec-8 .frame-box')
  .setTween(tl10)
  .addTo(controller);

const scene9 = new ScrollMagic.Scene({
  triggerElement: '.sec-8 .scroll-trigger',
  triggerHook: 'onLeave',
  duration: '100'
})

  .setPin('.sec-8 .frame-box')
  .setTween(tl9)
  .addTo(controller);

const scene8 = new ScrollMagic.Scene({
  triggerElement: '.sec-5',
  triggerHook: 'onLeave',
  duration: '100%'
})

  .setPin('.sec-5')
  .setTween(tl8)
  .addTo(controller);

const scene7 = new ScrollMagic.Scene({
  triggerElement: '.sec9',
  triggerHook: 'onLeave',
  duration: '100%'
})

  .setPin('.sec9')
  .setTween(tl7)
  .addTo(controller);

const scene6 = new ScrollMagic.Scene({
  triggerElement: '.sec12',
  triggerHook: 'onLeave',
  duration: '100%'
})

  .setPin('.sec12')
  .setTween(tl6)
  .addTo(controller);

const scene5 = new ScrollMagic.Scene({
  triggerElement: '.sec11',
  triggerHook: 'onLeave',
  duration: '100%'
})

  .setPin('.sec11')
  .setTween(tl5)
  .addTo(controller);

// const scene = new ScrollMagic.Scene({
//   triggerElement: '.sec-7',
//   triggerHook: 'onLeave',
//   duration: '100%'
// })

//   .setPin('.sec-7')
//   .setTween(tl)
//   .addTo(controller);

const scene3 = new ScrollMagic.Scene({
  triggerElement: '.sec-4',
  triggerHook: 'onLeave',
  duration: '100%'
})

  .setPin('.sec-4')
  .setTween(tl3)
  .addTo(controller);

const scene4 = new ScrollMagic.Scene({
  triggerElement: '.sec-6 .trigger-6-1',
  triggerHook: 'onLeave',
  duration: '100%'
})

  .setPin('.box-right')
  .setTween(tl4)
  .addTo(controller);

const scene2 = new ScrollMagic.Scene({
  triggerElement: 'blockquote'
})

  .setTween(tl2)
  .addTo(controller);

function updatePercentage() {
  tl.progress();
  console.log(tl.progress());
}

window.addEventListener('scroll', sticky);
