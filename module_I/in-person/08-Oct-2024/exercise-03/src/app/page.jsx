'use client'

import React from 'react'
import { useState, useEffect } from 'react'

const page = () => {
  const [time, setTime] = useState(0)

  useEffect((prevItem) => {
    
    const interval = setInterval(() => setTime(prevItem => prevItem + 1), 1000)

    return (() => clearInterval(interval))
  }, [time])

  const reset = () => {
    setTime(0)
  }

  return (
    <div>
      <h1>Temporizador: {time}</h1>
      <button onClick={() => reset()}>Reiniciar</button>
    </div>
  )
}

export default page
