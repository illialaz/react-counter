import React, { useState, useEffect, useContext } from 'react'
import logo from './logo.svg'
import './App.css'
import Button from './components/Button'
import { Counter } from './components/Counter'

function App() {
  const [count, setCount] = useState("25")

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count + 1)
    }, 1000)

    return () => {
      clearInterval(timer);
    }
  }, [count]);

  const incrementCount = (increment) => {
    setCount(count + increment)
  }

  return (
    <div className='App'>
      <Button increment={1} onClickFunction={incrementCount} />
      <Button increment={10} onClickFunction={incrementCount} />
      <Button increment={100} onClickFunction={incrementCount} />
      <Button increment={1000} onClickFunction={incrementCount} />
      <Counter count={count} />
    </div>
  )
}

export default App
