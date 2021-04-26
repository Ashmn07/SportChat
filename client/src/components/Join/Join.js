import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './Join.css'

function Join() {
    const [name,setName]=useState('')
    const [room,setRoom]=useState('')

    return (
        <div className="join__outer">
            <div className="join__inner">
                <h1 className="join__heading">Join</h1>
                <input 
                placeholder="Name" 
                type="text" 
                value={name}
                className="join__input mt-30"
                onChange={event=>setName(event.target.value)}/> 
                <input 
                placeholder="Room" 
                type="text" 
                value={room}
                className="join__input"
                onChange={event=>setRoom(event.target.value)}/> 
                <Link onClick={event => (!name || !room)?event.preventDefault():null} to={`/Chat?name=${name}&room=${room}`}>
                    <button className="button mt-30" type="submit">Sign In</button>
                </Link>
            </div>
        </div>
    )
}

export default Join
