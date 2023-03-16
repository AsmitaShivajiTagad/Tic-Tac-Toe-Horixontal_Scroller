import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import SignInFrom from './form/SignIn.js';
// import SignUpFrom from './form/SignUp.js';
// import SlideImag from './SlideImage/SlideImg';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <SignInFrom/>
      {/* <SignUpForm/> */}
      {/* <SlideImag/> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
