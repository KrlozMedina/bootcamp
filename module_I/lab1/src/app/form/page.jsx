'use client'

import { useInputHook } from 'lab1/hooks/useInputHook'
import React from 'react'
import { useEffect, useState } from 'react'

const page = () => {
    const [data, setData] = useState({})
    
    const {value: name, bind: bindName, reset: resetName} = useInputHook()
    const {value: email, bind: bindEmail, reset: resetEmail} = useInputHook()
    const {value: username, bind: bindUsername, reset: resetUsername} = useInputHook()
    const {value: password, bind: bindPassword, reset: resetPassword} = useInputHook()

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(name, email, username, password)
        // let [data, setData] = useState([])
        setData({
            'name': name,
            'email': email,
            'username': username,
            'password': password
        })
        localStorage.setItem('data', JSON.stringify(data))
    }

    useEffect(() => {
        setData(JSON.parse(localStorage.getItem('data')))
        console.log('data', data)
    }, [])

    useEffect(() => {
        console.log('Data')
        localStorage.setItem('data', JSON.stringify(data))
        console.log(JSON.parse(localStorage.getItem('data')))
    }, [data])

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name and Lastname: </label>
            <input type="text" name='name' {...bindName} />
            <br />
            <label htmlFor="email">Email: </label>
            <input type="email" name='email' {...bindEmail} />
            <br />
            <label htmlFor="username">Username: </label>
            <input type="text" name='username' {...bindUsername} />
            <br />
            <label htmlFor="password">Password</label>
            <input type="password" name='password' {...bindPassword} />
            <br />
            <input type="submit" />
        </form>
    )
}

export default page
