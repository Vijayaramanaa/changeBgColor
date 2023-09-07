
import './App.css';
import { useState } from 'react';
import Background from './Background';
import InputColor from './InputColor';

import './index.css'

function App() {
 
      const [colorValue,setColorValue] = useState('')
      const [isDarkText,setIsDarkText] = useState(true)

      const changeColor = ()=>{
          const color = isDarkText ? false : true 
          setIsDarkText(color)
      }

  return (
    < div className='appcop'>

      <Background
      colorValue = {colorValue}
      isDarkText = {isDarkText}
      changeColor={changeColor}

      />
      <InputColor
       colorValue = {colorValue}
       setColorValue = {setColorValue}
       isDarkText = {setIsDarkText}
       changeColor={changeColor}

      />

    </div>
  );
}

export default App;
