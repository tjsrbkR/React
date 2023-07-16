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
