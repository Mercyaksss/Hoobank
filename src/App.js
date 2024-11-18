import React from 'react';
import './app.css'
import ellipse1 from './assets/ellipse1.png'
import ellipse11 from './assets/ellipse11.png'


import Main from './components/main';
function App() {
  return (
    <div className="App">
      <img  src={ellipse1} className='ellipse1'/>
      {/* <img src={ellipse4} className='ellipse-4'/> */}
      {/* <img src={ellipse11} className='ellipse-11'/> */}

      <Main/>
    </div>
  );
}

export default App;
