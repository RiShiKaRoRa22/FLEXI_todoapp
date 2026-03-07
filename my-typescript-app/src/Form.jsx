import {useState} from 'react'

const Forms=({name, setName})=>{
    return(
        <div>
        <form>
            <input name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
        </form>
        </div>
    )
}

export default Forms;