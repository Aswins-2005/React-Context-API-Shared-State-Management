import React, { useState } from 'react'
import  './App.css'
import Card from "./components/card/Card";
import Context from './components/Context'
const App = () => {
  const [count,setcount] =useState(0) 
  return (

    <Context.Provider value={{count,setcount,username : "Jo"}} >
      <h1>{count}</h1>
      <div className='app-container'>
      <Card
      name="Aswin"
      email="as@gmail.com"
      btname="btn1" />

      <Card
      name="Balaram"
      email="balaram@gmail.com"
      btname="btn2" />

      <Card
      name="Tyson"
      email="Tyson@gmail.com"
      btname="btn3" />

      
    </div>
    </Context.Provider>
  )
}
export default App