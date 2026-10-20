import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

//32-2  mainly function gulo kivabe button er moddhe integrate korbo ta dekhano hoyese







function App() {


//kaj 1: button a click korle ki hobe ta 1ta function er moddhe diye dilam
function handleClick(){
        alert('I am clicked')
}  


//3rd kaj:-   2nd kaj er por eta korsi . most of the time arrow function use korbo tai 

const handleClick3=()=>{
  alert('Clicked')
}


//4th kaj:- parameter diye korte chaile 
const handleAdd5=(num)=>{
  const newNum=num+5;
  alert(newNum);
}

  return (
    <>
     <h3>Vite + React</h3>
     {/* <button onClick="handleClick()">Click me</button>        normal html er moto kore function use korbona*/}


     <button onClick={handleClick}>Click Me</button> {/*2nd kaj:-  ekhane function ta k use korsi tai button  a click korle alert notification ashbe */}





{/* 2nd kaj er por eta korsi.chaile amra ekshate e function ta likhe dite pari button er moddhe */}

      <button onClick={function handleClick2(){
        alert('Clicked 2')
      }}>Click Me 2</button>




{/* 3rd kaj er pore eta korsi . arrow function ta k use korar jonno */}
      <button onClick={handleClick3}>Click me 3</button>
      {/* vitoreo arrow function lekha jay jeta amra majhe majhe korbo */}
      <button onClick={()=>alert('click 4')}>Click me 4</button>






{/* 4th kaj er pore. parameter pathanor jonno  */}
      {/* <button onClick={handleAdd5(7)}>Click Add 5</button>     evabe korle hobena.tahole page reload howar shomoy er result diye dibe click korar agei*/}
      <button onClick={()=>handleAdd5(10)}>Click Add 5</button>

    </>
  )
}

export default App
