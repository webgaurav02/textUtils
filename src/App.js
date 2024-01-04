import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Textbox from './Components/Textbox/Textbox';
import About from './Components/About/About';
import useLocalStorage from 'use-local-storage'



function App() {

  const [isDark, setDark] = useLocalStorage("isDark", true);

  let bckColor, forColor;
  if(isDark){
    bckColor = '#0a0a0a';
    forColor =  '#f6f6f6';
  }
  else{
    bckColor = '#e8e8e8';
    forColor =  'rgb(0, 31, 63)';
  }

  const [style, setStyle] = useState({
    backgroundColor: bckColor,
    color: forColor
  });


  const toggleDark = () => {
    setDark(!isDark);
    if(isDark){
      setStyle({
        backgroundColor: '#e8e8e8',
        color: 'rgb(0, 31, 63)'
      })
    }
    else{
      setStyle({
        backgroundColor: '#0a0a0a',
        color: 'white'
      })
    }
  };

  return (
    <div className='App' style={style}>
      <Navbar title="textUtils" mode={isDark} toggle={toggleDark} />
      <Routes>
        <Route path="/" element={<Textbox mode={isDark}/>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
