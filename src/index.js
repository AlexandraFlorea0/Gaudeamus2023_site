import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/styles.css';
import './css/bootstrap-icons.css';
import './css/bootstrap.min.css';
import Navbar from './Navbar';
import Section1 from './section1';
import Section2 from './section2';
import Section3 from './section3';
import Section4 from './section4';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Navbar />
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
  </>
);

