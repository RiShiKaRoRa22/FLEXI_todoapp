import React from 'react'

import { NavLink } from 'react-router-dom'

const Header=()=>{
    return(
        <nav>
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>

        </nav>
    )
}

export default Header