import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Counter from './counter'  
import Batsman from './batsman'// 1st kaj: batsman.jsx er kaj seshe ekhane import korlam . Batsman function theke ekhane import korlam 

//32-4 ager turorial r etar kaj exactly same + useState 2bar use kore 1st a run hishab korse pore koyta six hoy shetao count korse batsman.jsx er moddhe . valo kore shikhaise shohoje shekha jay







function App() {



  function handleClick() {
    alert('I am clicked')
  }


  const handleClick3 = () => {
    alert('Clicked')
  }


  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }

  return (
    <>
      <h3>Vite + React</h3>
{/*2nd kaj: ekhane use korlam function er kaj ta */}
      <Batsman></Batsman>



    
      <Counter></Counter>









      <button onClick={handleClick}>Click Me</button>







      <button onClick={function handleClick2() {
        alert('Clicked 2')
      }}>Click Me 2</button>





      <button onClick={handleClick3}>Click me 3</button>

      <button onClick={() => alert('click 4')}>Click me 4</button>







      <button onClick={() => handleAdd5(10)}>Click Add 5</button>

    </>
  )
}

export default App
