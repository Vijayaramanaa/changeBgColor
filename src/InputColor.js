import React from 'react'

function InputColor({colorValue,setColorValue,changeColor}) {
    
  return (
    <form className='inputc' onSubmit={(e)=>e.preventDefault()}>
        <input className='inone'
        autoFocus
        type = "text"
        value ={colorValue}
        required
        onChange={(e)=>{setColorValue(e.target.value)
        }}
        placeholder='Enter the color'
        />
        <button className='intwo'
        type='button'
        onClick={changeColor}
         >Change Color</button>
       
        
    </form>
  )
}

export default InputColor