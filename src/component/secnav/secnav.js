import React from 'react'
import './secnav.css'
function SecNav(props) {
return (
    <div className='d-flex mb-5 sec-nav'>
        <h3 className='ptitle '> {props.text} </h3>
        <span className=''> <span className='parent-page'>{props.parent}</span> / <span className='child-page'>{props.child}</span> </span>
    </div>
)
}

export default SecNav
