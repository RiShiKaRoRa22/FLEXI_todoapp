import {useState} from 'react'
import './index.css'
import './App.css'

const Login=()=>{
    const [islogin, setisLogin]= useState(false);
    return(
        <div className='new'>
        {islogin? (
            <p>Hey, User!</p>
            
        ):(
            
            <div>
            <p>Please Login</p>
            <button className='button1' onClick={()=>setisLogin(true)}>Login</button>
            </div>
        )}
        </div>
    
    )


}

export default Login;