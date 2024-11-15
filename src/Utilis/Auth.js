import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

const Auth = (props) => {
    const {Component} = props
    const navigate = useNavigate()
    useEffect(() => {
        let login = localStorage.getItem('login')
        if(!login){
            navigate('/signin')
        }
    })
  return (
    <>
    <Component/>
    </>
  )
}

export default Auth