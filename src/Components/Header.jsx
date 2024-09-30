import React, { useState } from 'react'
import Content from './Content'

const Header = () => {

    const [len, setLen] = useState(0)
    const [res, setRes] = useState('')
    const [msg, setMsg] = useState(false)

  return (
    <>
        <Content 
        len={len} 
        res={res} 
        setLen={setLen} 
        setRes={setRes}
        msg={msg}
        setMsg={setMsg}
        />
    </>
  )
}

export default Header