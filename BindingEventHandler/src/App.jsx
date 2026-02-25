import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UsingArrowMethod from './UsingArrowMethod'
import BindingWithClassComponent from './BindingWithClassComponent'
import Constructore from './Constructure'
import Use_state_with_object from './Use_state_with_object'
import Usestate_with_array from './usestate_with_array'
import Spreed_operator from './Spreed_operator'

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

function App4()
{
  return(

    <>
      <Use_state_with_object></Use_state_with_object>
    </>

  )
}


function App5()
{
  return(

    <>
     <Usestate_with_array></Usestate_with_array>
    </>

  )
}

function App6()
{
  return(

    <>
     <Spreed_operator></Spreed_operator>
    </>

  )
}


export default App6;
