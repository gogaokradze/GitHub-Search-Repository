import React, { useState, useEffect, useContext } from 'react'
import { TextField, Button } from '@mui/material'
import { useDebounce } from 'use-debounce';
import { UserContext } from '../UserContext'
import classes from './Form.module.css'





const Form = () => {
  const [text, setText] = useState('')
  const { setSearch, setData } = useContext(UserContext)
  const [debouncedValue] = useDebounce(text, 250)

  useEffect(() => {
    if (debouncedValue) {
      setSearch(debouncedValue)

    }
  }, [debouncedValue, setSearch])

  return (
    <>
      <div className={classes.form}>
        <TextField variant='outlined' className={classes.textfield} placeholder='Search repositories' value={text} onChange={(e) => {
          setText(e.target.value)
        }}>
        </TextField>
        <Button onClick={() => {
          setText('')
          setData()
        }}>Clear</Button>
      </div>
    </>

  )
}

export default Form