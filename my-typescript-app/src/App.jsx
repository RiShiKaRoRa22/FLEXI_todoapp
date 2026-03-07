import {useState, useEffect} from 'react';
import  Greeting from './Greeting'
import Login from './LoginUser'
import Forms from './Form'


function App(){
  const [count,setCount]=useState(0);
  const [name, setName]= useState("");
  /*function updateCount(()=>{
    setCount(count+1);
    

  });*/

  return(
    <div className="new">

      <Forms name={name} setName= {setName}/>
      <h1>count= {count}</h1>

      <button onClick={()=>setCount(count+1)}>increase count</button>

      <button onClick={()=>setCount(count-1)}>decrease count</button>
      
      <Greeting name={name} age="20"></Greeting>
      <Login />

    </div>
  )
}

export default App;