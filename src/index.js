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

  if (sc >= 1 && window.innerWidth > 675) {
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
var tl25 = new TimelineMax();
var tl26 = new TimelineMax();
var tl27 = new TimelineMax();
var tl28 = new TimelineMax();
var tl29 = new TimelineMax();
var tl30 = new TimelineMax();
var tl31 = new TimelineMax();
var tl32 = new TimelineMax();
var tl33 = new TimelineMax();
var tl34 = new TimelineMax();
var tl35 = new TimelineMax();
var tl36 = new TimelineMax();
var tl37 = new TimelineMax();
var tl38 = new TimelineMax();
var tl39 = new TimelineMax();
var tl40 = new TimelineMax();
var tl41 = new TimelineMax();

const controller = new ScrollMagic.Controller({ addIndicators: true });

new ScrollMagic.Scene().addTo(controller);

//mobile version animation control below here: 

const mq_mobile = window.matchMedia("(max-width: 670px)");
if (mq_mobile.matches) {
  tl32.from('#f10', 500, { x: 200, opacity: 0 }, '=-1');
  tl32.from('#f09', 600, { x: -200, opacity: 0 }, '=-1');
  tl32.from('#f11', 400, { x: 200, opacity: 0 }, '=-1');
  tl31.from('#imgOne', 1, { x: 0, opacity: 0 }, '=-1');
  tl26.from('#imgTwo', 1, { x: 0, opacity: 0 }, '=-1');
  tl27.from('#imgThree', 1, { x: 0, opacity: 0 }, '=-1');
  tl28.from('#imgFour', 1, { x: 0, opacity: 0 }, '=-1');
  tl29.from('#imgFive', 1, { x: 0, opacity: 0 }, '=-1');
  tl30.from('#imgSix', 1, { x: 0, opacity: 0 }, '=-1');
  tl33.from('#history-1', 1, { x: 0, opacity: 0 }, '=-1');
  tl34.from('#history-2', 1, { x: 0, opacity: 0 }, '=-1');
  tl35.from('#history-3', 1, { x: 0, opacity: 0 }, '=-1');
  tl36.from('#history-4', 1, { x: 0, opacity: 0 }, '=-1');
  tl37.from('#num-1', 1, { x: 0, opacity: 0 }, '=-1');
  tl38.from('#num-2', 1, { x: 0, opacity: 0 }, '=-1');
  tl38.from('#num-3', 1, { x: 0, opacity: 0 }, '=-1');
  tl39.from('#num-4', 1, { x: 0, opacity: 0 }, '=-1');
  tl39.from('#num-5', 1, { x: 0, opacity: 0 }, '=-1');
  tl40.from('#num-6', 1, { x: 0, opacity: 0 }, '=-1');
  tl41.from('#num-7', 1, { x: 0, opacity: 0 }, '=-1');
  tl41.from('#num-8', 1, { x: 0, opacity: 0 }, '=-1');

  // animationScenes();
  animeMobile();

}

function animeMobile() {
  //section-3 trigger point:
  const scene33 = new ScrollMagic.Scene({
    triggerElement: '.sec-3',
    triggerHook: 'onLeave',
    duration: '100%'
  }).setPin('.scroll-trigger-3-1')
    .setTween(tl33)
    .addTo(controller);

  const scene34 = new ScrollMagic.Scene({
    triggerElement: '.scroll-trigger-3-2',
    triggerHook: 'onLeave',
    duration: '100%'
  }).setPin('.scroll-trigger-3-2')
    .setTween(tl34)
    .addTo(controller);

  const scene35 = new ScrollMagic.Scene({
    triggerElement: '.scroll-trigger-3-3',
    triggerHook: 'onLeave',
    duration: '100%'
  }).setPin('.scroll-trigger-3-3')
    .setTween(tl35)
    .addTo(controller);

  const scene36 = new ScrollMagic.Scene({
    triggerElement: '.scroll-trigger-3-4',
    triggerHook: 'onLeave',
    duration: '100%'
  }).setPin('.scroll-trigger-3-4')
    .setTween(tl36)
    .addTo(controller);

  //section-4 trigger point:
  const scene32 = new ScrollMagic.Scene({
    triggerElement: '.sec-4',
    triggerHook: 'onLeave',
    duration: '100%'
  }).setPin('.sec-4')
    .setTween(tl32)
    .addTo(controller);


  //section-5 trigger point:
  const scene26 = new ScrollMagic.Scene({
    triggerElement: '.trigger-2',
    triggerHook: 'onLeave',
    duration: '100%'
  }).setPin('.trigger-2')
    .setTween(tl26)
    .addTo(controller);

  const scene27 = new ScrollMagic.Scene({
    triggerElement: '.trigger-3',
    triggerHook: 'onLeave',
    duration: '100%'
  }).setPin('.trigger-4')
    .setTween(tl27)
    .addTo(controller);

  const scene28 = new ScrollMagic.Scene({
    triggerElement: '.trigger-5',
    triggerHook: 'onLeave',
    duration: '100%'
  }).setPin('.trigger-6')
    .setTween(tl28)
    .addTo(controller);

  const scene29 = new ScrollMagic.Scene({
    triggerElement: '.trigger-6',
    triggerHook: 'onLeave',
    duration: '100%'
  }).setPin('.trigger-6')
    .setTween(tl29)
    .addTo(controller);

  const scene30 = new ScrollMagic.Scene({
    triggerElement: '.trigger-7',
    triggerHook: 'onLeave',
    duration: '100%'
  }).setPin('.trigger-7')
    .setTween(tl30)
    .addTo(controller);

  const scene31 = new ScrollMagic.Scene({
    triggerElement: '.trigger-1',
    triggerHook: 'onLeave',
    duration: '100%'
  }).setPin('.trigger-2')
    .setTween(tl31)
    .addTo(controller);

  //section-6 trigger point:
  const scene37 = new ScrollMagic.Scene({
    triggerElement: '.trigger-6-1',
    triggerHook: 'onLeave',
    duration: '100%'
  }).setPin('.trigger-6-1 ')
    .setTween(tl37)
    .addTo(controller);

  const scene38 = new ScrollMagic.Scene({
    triggerElement: '.trigger-6-2',
    triggerHook: 'onLeave',
    duration: '100%'
  }).setPin('.trigger-6-2')
    .setTween(tl38)
    .addTo(controller);

  const scene39 = new ScrollMagic.Scene({
    triggerElement: '.trigger-6-3',
    triggerHook: 'onLeave',
    duration: '100%'
  }).setPin('.trigger-6-3')
    .setTween(tl39)
    .addTo(controller);

  const scene40 = new ScrollMagic.Scene({
    triggerElement: '.trigger-6-4',
    triggerHook: 'onLeave',
    duration: '100%'
  }).setPin('.trigger-6-4')
    .setTween(tl40)
    .addTo(controller);

  const scene41 = new ScrollMagic.Scene({
    triggerElement: '.trigger-6-5',
    triggerHook: 'onLeave',
    duration: '100%'
  }).setPin('.trigger-6-5')
    .setTween(tl41)
    .addTo(controller);



}
//desktop version animation control below here: //
const mq = window.matchMedia("(min-width: 670px)");
if (mq.matches) {
  tl.from('blockquote', 1, { x: -400, opacity: 0 });
  tl.from('.box-img', 1, { x: 300, opacity: 0, scale: '1.2' });
  tl.from('span', 1, { width: 0 }, '=-.5');
  tl.from('#img-1', 1, { x: -250, opacity: 0 }, '=-1');
  tl.from('#img-2', 1, { x: 200, opacity: 0 }, '=-1');
  tl3.from('#f10', 500, { x: 200, opacity: 0 }, '=-1');
  tl3.from('#f09', 600, { x: -200, opacity: 0 }, '=-1');
  tl3.from('#f11', 400, { x: 200, opacity: 0 }, '=-1');

  tl4.from('#pa-1', 20, { x: 0, opacity: 0 }, '=-1');
  tl4.from('#pa-2', 20, { x: 0, opacity: 0 }, '=-1');
  tl4.from('#pa-3', 20, { x: 0, opacity: 0 }, '=-1');
  tl4.from('#pa-4', 20, { x: 0, opacity: 0 }, '=-1');
  tl4.from('#pa-5', 20, { x: 0, opacity: 0 }, '=-1');
  tl4.from('#pa-1', 2, { x: 0, opacity: 1 }, '=-1');
  tl4.from('#pa-2', 2, { x: 0, opacity: 1 }, '=-1');
  tl4.from('#pa-3', 2, { x: 0, opacity: 1 }, '=-1');
  tl4.from('#pa-4', 2, { x: 0, opacity: 1 }, '=-1');
  tl4.from('#pa-5', 2, { x: 0, opacity: 1 }, '=-1');
  tl25.from('#pa-6', 3, { x: 0, opacity: 0 }, '=-1');
  tl25.from('#pa-7', 3, { x: 0, opacity: 0 }, '=-1');
  tl25.from('#pa-8', 6, { x: 0, opacity: 0 }, '=-1');
  tl25.from('#pa-9', 5, { x: 0, opacity: 0 }, '=-1');
  tl25.from('#pa-10', 7, { x: 0, opacity: 0 }, '=-1');
  tl25.from('#pa-6', 2, { x: 0, opacity: 1 }, '=-1');
  tl25.from('#pa-7', 2, { x: 0, opacity: 1 }, '=-1');
  tl25.from('#pa-8', 3, { x: 0, opacity: 1 }, '=-1');
  tl25.from('#pa-9', 3, { x: 0, opacity: 1 }, '=-1');
  tl25.from('#pa-10', 2, { x: 0, opacity: 1 }, '=-1');

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

  // tl26.from('#imgThree', 4580, { x: 300, opacity: 0 }, '=-1');
  // tl26.from('#imgFour', 4580, { x: 300, opacity: 0 }, '=-1');



  tl8.from('#imgOne', 3480, { x: 300, opacity: 0 }, '=-1');
  tl8.from('#imgTwo', 4480, { x: 300, opacity: 0 }, '=-1');
  tl17.from('#imgThree', 4580, { x: 300, opacity: 0 }, '=-1');
  tl17.from('#imgFour', 4680, { x: 300, opacity: 0 }, '=-1');
  tl17.from('#imgFive', 4780, { x: 300, opacity: 0 }, '=-1');
  tl17.from('#imgSix', 4880, { x: 300, opacity: 0 }, '=-1');
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

  animationScenes();
}


function updatePercentage() {
  tl.progress();
  console.log(tl.progress());
}


function animationScenes() {

  const scene20 = new ScrollMagic.Scene({
    triggerElement: '.sec-6 .trigger-6-1',
    triggerHook: 'onLeave',
    duration: '100%'
  }).setPin('.sec-6 .navbar')
    .setTween(tl20)
    .addTo(controller);

  const scene19 = new ScrollMagic.Scene({
    triggerElement: '.sec-5 .scroll-trigger-5-2',
    triggerHook: 'onLeave',
    duration: '100%'
  }).setPin('#btn-side')
    .setTween(tl19)
    .addTo(controller);

  ////////
  const scene18 = new ScrollMagic.Scene({
    triggerElement: '.sec-3 .scroll-trigger-3-1',
    triggerHook: 'onLeave',
    duration: '100%'
  }).setPin('.scroll-trigger-3-2')
    .setTween(tl18)
    .addTo(controller);

  const scene17 = new ScrollMagic.Scene({
    triggerElement: '.sec-5 .scroll-trigger-5-2',
    triggerHook: 'onLeave',
    duration: '100%'
  }).setPin('.scroll-trigger-5-1')
    .setTween(tl17)
    .addTo(controller);

  const scene16 = new ScrollMagic.Scene({
    triggerElement: '.sec-8 .scroll-trigger8',
    triggerHook: 'onLeave',
    duration: '100'
  }).setPin('.sec-8 .frame-box')
    .setTween(tl16)
    .addTo(controller);

  const scene15 = new ScrollMagic.Scene({
    triggerElement: '.sec-8 .scroll-trigger7',
    triggerHook: 'onLeave',
    duration: '100'
  }).setPin('.sec-8 .frame-box')
    .setTween(tl15)
    .addTo(controller);

  const scene14 = new ScrollMagic.Scene({
    triggerElement: '.sec-8 .scroll-trigger6',
    triggerHook: 'onLeave',
    duration: '100'
  }).setPin('.sec-8 .frame-box')
    .setTween(tl14)
    .addTo(controller);

  const scene13 = new ScrollMagic.Scene({
    triggerElement: '.sec-8 .scroll-trigger5',
    triggerHook: 'onLeave',
    duration: '100'
  }).setPin('.sec-8 .frame-box')
    .setTween(tl13)
    .addTo(controller);

  const scene12 = new ScrollMagic.Scene({
    triggerElement: '.sec-8 .scroll-trigger4',
    triggerHook: 'onLeave',
    duration: '100'
  }).setPin('.sec-8 .frame-box')
    .setTween(tl12)
    .addTo(controller);

  const scene11 = new ScrollMagic.Scene({
    triggerElement: '.sec-8 .scroll-trigger3',
    triggerHook: 'onLeave',
    duration: '100'
  }).setPin('.sec-8 .frame-box')
    .setTween(tl11)
    .addTo(controller);

  const scene10 = new ScrollMagic.Scene({
    triggerElement: '.sec-8 .scroll-trigger2',
    triggerHook: 'onLeave',
    duration: '100'
  }).setPin('.sec-8 .frame-box')
    .setTween(tl10)
    .addTo(controller);

  const scene9 = new ScrollMagic.Scene({
    triggerElement: '.sec-8 .scroll-trigger',
    triggerHook: 'onLeave',
    duration: '100'
  }).setPin('.sec-8 .frame-box')
    .setTween(tl9)
    .addTo(controller);

  const scene8 = new ScrollMagic.Scene({
    triggerElement: '.sec-5',
    triggerHook: 'onLeave',
    duration: '100%'
  }).setPin('.sec-5')
    .setTween(tl8)
    .addTo(controller);

  const scene7 = new ScrollMagic.Scene({
    triggerElement: '.sec9',
    triggerHook: 'onLeave',
    duration: '100%'
  }).setPin('.sec9')
    .setTween(tl7)
    .addTo(controller);

  const scene6 = new ScrollMagic.Scene({
    triggerElement: '.sec12',
    triggerHook: 'onLeave',
    duration: '100%'
  }).setPin('.sec12')
    .setTween(tl6)
    .addTo(controller);


  const scene2 = new ScrollMagic.Scene({
    triggerElement: 'blockquote'
  }).setTween(tl2)
    .addTo(controller);

  const scene = new ScrollMagic.Scene({
    triggerElement: '.sec-7',
    triggerHook: 'onLeave',
    duration: '100%'
  }).setPin('.sec-7')
    .setTween(tl)
    .addTo(controller);

  const scene5 = new ScrollMagic.Scene({
    triggerElement: '.sec11',
    triggerHook: 'onLeave',
    duration: '100%'
  }).setPin('.sec11')
    .setTween(tl5)
    .addTo(controller);

  const scene3 = new ScrollMagic.Scene({
    triggerElement: '.sec-4',
    triggerHook: 'onLeave',
    duration: '100%'
  }).setPin('.sec-4')
    .setTween(tl3)
    .addTo(controller);

  const scene4 = new ScrollMagic.Scene({
    triggerElement: '.sec-6',
    triggerHook: 'onLeave',
    duration: '100%'
  }).setPin('.box-right')
    .setTween(tl4)
    .addTo(controller);

  const scene25 = new ScrollMagic.Scene({
    triggerElement: '.sec-6 .trigger-6-3',
    triggerHook: 'onLeave',
    duration: '100%'
  }).setPin('.sec-6 .box-right')
    .setTween(tl25)
    .addTo(controller);


  // const scene26 = new ScrollMagic.Scene({
  //   triggerElement: '.sec-5',
  //   triggerHook: 'onLeave',
  //   duration: '100%'
  // }).setPin('.scroll-trigger-5-4')
  //   .setTween(tl26)
  //   .addTo(controller);
}

window.addEventListener('scroll', sticky);
