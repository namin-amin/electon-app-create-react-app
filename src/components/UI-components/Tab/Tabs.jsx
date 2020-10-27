import React from 'react'
import {Link} from 'react-router-dom'

function Tabs() {
    return (
        <div>
            <Link to="/"><p> multiply 2 numbers</p></Link>
            <Link to="/add"><p>add 2 numbers</p></Link>
            <Link to="/devide"><p>devide 2 numbers</p></Link>
        </div>
    )
}

export default Tabs
