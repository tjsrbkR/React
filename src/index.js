import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// 롤링배너 이벤트
const kindWrap = document.querySelector('.kind-wrap');
const slider = kindWrap.querySelector('.slider');
const slideLis = slider.querySelectorAll('.slider li')
const moveButton = kindWrap.querySelector('.arrow');

/* 클론 */
const clone1 = slideLis[0].cloneNode(true);
const cloneLast = slideLis[slideLis.length - 1].cloneNode(true);
slider.insertBefore(cloneLast, slideLis[0]);
slider.appendChild(clone1);

/* 주요 변수 초기화 */
let currentIdx = 0;
let translate = 0;
const speedTime = 500;

/* CSSOM 셋업 */
const sliderCloneLis = slider.querySelectorAll('li');
const liWidth = slideLis[0].clientHeight;
const sliderWidth = liWidth * sliderCloneLis.length;
slider.style.width = `${sliderWidth}px`;

/* 리스너 설치하기 */
moveButton.addEventListener('click', moveSlide);

/* 슬라이드 실행 */
function move(D) {
  currentIdx += (-1 * D);
  translate += liWidth * D;
  slider.style.transform = `translateY(${translate}px)`;
  slider.style.transition = `all ${speedTime}ms ease`
}

/* 버튼 클릭 */
function moveSlide(event) {
  event.preventDefault();
  if (event.target.className === 'next') {
    if (currentIdx === slideLis.length - 1)
      return;
    move(-1);
  } else {
    if (currentIdx === 0)
      return;
    move(1);
  }
}
function sliding() {
  move(-1);
  if (currentIdx === sliderCloneLis.length - 1)
    setTimeout(() => {
      slider.style.transition = 'none';
      currentIdx = 1;
      translate = -liWidth;
      slider.style.transform = `translateY(${translate}px)`;
    }, speedTime);
}

function showSliding() {
  setInterval(sliding, 3000);
}
showSliding();

const findeBox = document.querySelectorAll(".find-store-animate");
const boxes = document.querySelectorAll('.box');
const option = {
  root: null, //viewport
  rootMargin: '0px',
  threshold: 0.5,  // 50%가 viewport에 들어와 있어야 callback 실행
}
const callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active1');
    } else {
      entry.target.classList.remove('active1');
    }
  });
};
const findeStoreAnimate = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('on');
    } else {
      entry.target.classList.remove('on');
    }
  });
};
const observer = new IntersectionObserver(callback, option);
const findeStore = new IntersectionObserver(findeStoreAnimate, option);
boxes.forEach(box => observer.observe(box));
findeBox.forEach(box => findeStore.observe(box));
reportWebVitals();
