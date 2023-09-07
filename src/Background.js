import React from 'react'

function Background({colorValue,isDarkText}) {
  const text = isDarkText? "black":"white"
  return (
   <section className='square' style={{backgroundColor:colorValue}}>
    <p style={{color: text}}>{colorValue? colorValue : "Empty"}</p>
   </section>
  )
}

export default Background