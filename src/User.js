import React from 'react'

function User(props){
    return(
        <div>
            <h1>{props.title}. {props.first} {props.last}</h1>
            <h2>Location: {props.state}, {props.country}</h2>
            <h2>Age: {props.age}</h2>
            <img src = {props.pic}/>
            <h1> - </h1>
        </div>
    )
    
}

export default User