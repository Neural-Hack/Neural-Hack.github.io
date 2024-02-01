import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'
import GlobalStyle from './GlobalStyle';

import Landing from './pages/Landing'
import NotFound from './pages/NotFound';
import About from './pages/About';
import Contribute from './pages/Contribute';
import Apply from './pages/Apply';
import WorkInProgress from './pages/WorkInProgress';

const root = ReactDOM.createRoot(document.getElementById('root'));

const AnimatedRoutes=()=>{
  const location = useLocation();

  return (
    <AnimatePresence mod='sync'>
    <GlobalStyle/>
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Landing/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contribute" element={<Contribute/>}/>
      <Route path="/learn" element={<WorkInProgress/>}/>
      <Route path="/join" element={<Apply/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </AnimatePresence>
);
}

root.render(
  <Router>
    <AnimatedRoutes />
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
