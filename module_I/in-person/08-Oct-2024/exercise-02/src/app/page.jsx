'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import styles from "./page.module.css"

const page = () => {
  const API = 'https://jsonplaceholder.typicode.com/users'
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then(data => setData(data))
    .catch(e => console.error(e))
  }, [])

  if(data.length === 0){
    return null
  }

  return (
    <>
      {/* {console.log(data)} */}
      <h1>Consumo de API <a href={API} className={styles.a} >{API}</a></h1>
      {data.map(element => (
        <div key={element.id} className={styles.container}>
          <h2>{element.name}</h2>
          <h3>{element.username}</h3>
          <p>Phone: {element.phone}</p>
          <p>Email: {element.email}</p>
          <p>Website: {element.website}</p>
        </div>
      ))}
    </>
  )
}

export default page
