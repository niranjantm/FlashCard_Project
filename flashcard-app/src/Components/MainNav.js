import React, { Fragment } from 'react'
import {NavLink} from "react-router-dom"

function MainNav() {
  return (
    <Fragment>
        <div>
            <nav>
                <ul className='flex space-x-2'>
                    <li><NavLink to="/" className={({isActive})=>{ return isActive?"text-red-600":""}}>Create New</NavLink></li>
                    <li><NavLink to="/MyflashCards" className={({isActive})=>{return isActive?"text-red-600":""}}>My FlashCards</NavLink></li>
                </ul>
            </nav>
        </div>
    </Fragment>
  )
}

export default MainNav