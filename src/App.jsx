
import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Marks from "./components/Marks/Marks.jsx"

function App() {
  const [credits,setCredits]=useState(0);
  const[Price,setPreice]=useState(0);
   const[Title,setTitle]=useState([]);

  

  const handalCredit=(credithours,price,title)=>{
    let totalCradit=parseInt(credithours)+credits;
    setCredits(totalCradit);

    let totalPrice=parseFloat(price)+Price;
    setPreice(totalPrice);

    const newtitle=[...Title,title]
    setTitle(newtitle)
    
    console.log(newtitle);
    
  }

  return (
    <div className='bg-slate-200 p-4'>
    
      <h1 className='text-4xl font-bold text-center'>Corse Registration</h1>
      <div className='flex gap-3 mt-3'>
        <Blogs
        handalCredit={handalCredit}
     
        ></Blogs>
        <Marks
        credits={credits}
      Price={Price}
        ></Marks>
      </div>
      
      </div>
  )
}

export default App
