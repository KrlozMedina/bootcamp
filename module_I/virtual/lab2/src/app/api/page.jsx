'use client'

import React from 'react'
import { useEffect, useState } from 'react'
import style from './page.module.css'

const page = () => {
    const API = 'https://jsonplaceholder.typicode.com/posts'
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(API)
        .then(res => res.json())
        .then(data => setData(data))
    }, [])

    return (
        <ul className={style.container}>
            {data.map(item => (
                <li key={item.id} >
                    <h1>{item.title}</h1>
                    <p>{item.body}</p>
                </li>
            ))}
        </ul>
    )
}

export default page
