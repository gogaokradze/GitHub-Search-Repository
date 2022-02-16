import React from 'react'
import classes from './Header.module.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className={classes.header}>
      <Link to="/"><h1>Search GitHub Repositories</h1></Link>
    </div>
  )
}

export default Header
