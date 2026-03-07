import React from "react"

const Greeting=({name,age})=>{
    return (
        <div>
        <p> greetings, {name}</p>
        <p>your age is: {age}</p>
        </div>
    )
}

export default Greeting;