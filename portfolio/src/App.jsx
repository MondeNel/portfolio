import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';


const App = () => {
  return (
   <div>
      <Navbar />
      {/* <Home /> */}
      <About />
      <Skills />
   </div>
  );
}

export default App;
