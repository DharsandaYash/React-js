import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UsingArrowMethod from './UsingArrowMethod'
import BindingWithClassComponent from './BindingWithClassComponent'
import Constructore from './Constructure'

function App1() {

  return (
    <>
     <UsingArrowMethod></UsingArrowMethod>
    
    </>
  )
}

function App2() {

  return (
    <>
     <BindingWithClassComponent></BindingWithClassComponent>
     
    </>
  )
}

function App3() {

  return (
    <>
     
     <Constructore></Constructore>
    </>
  )
}


export default App3;
