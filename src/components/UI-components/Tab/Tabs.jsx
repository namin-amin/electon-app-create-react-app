import React from 'react'
import {Link} from 'react-router-dom'

function Tabs() {
    return (
        <div>
            <Link to="/"><p> active tasks</p></Link>
            <Link to="/calender"><p>calender</p></Link>
            <Link to="/archived"><p>archived</p></Link>
        </div>
    )
}

export default Tabs
