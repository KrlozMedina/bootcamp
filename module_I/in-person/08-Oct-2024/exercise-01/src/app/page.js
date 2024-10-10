'use client'

import React from 'react'
import { useState, useEffect } from 'react'

const page = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      document.title = count
      setCount(count+1)
    }, 1000)
  }, [count])

  return (
    <h1>
      Hola mundo
    </h1>
  )
}

export default page
