import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../resourses/logo.png"

const Header = () => {
  return (
    <nav>
        <img src={logo} alt="SyncHub" />
        <main>
            <Link to={"/"}>Home</Link>
            <Link to={"/#Contact"}>Contact</Link>
            <Link to={"/#About"}>About</Link>
        </main>
    </nav>
  )
}

export default Header