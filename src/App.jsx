
import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Marks from "./components/Marks/Marks.jsx"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [credits, setCredits] = useState(0);
  const [Price, setPreice] = useState(0);
  const[RemainingCredit,setRemainingCredit]=useState(20)
  const [Titles, setTitle] = useState([]);
  const[blogs,setblogs]=useState([])
  



  const handalCredit = (credithours, price, title,Blog) => {
    let totalCradit = parseInt(credithours) + credits;
       
    
    const isExist=blogs.find(itme=>itme.id===Blog.id)
    if(isExist){
      toast('Already added the corse')
    }

    else{

    if(totalCradit<=20){
      setCredits(totalCradit);

    const newblog=[...blogs,Blog];
    setblogs(newblog);
    console.log(newblog)

    let totalPrice = parseInt(price) + Price;
    setPreice(totalPrice);

    const newtitle = [...Titles, title]
    setTitle(newtitle);

    let newCredit=20-totalCradit;
    setRemainingCredit(newCredit)
  }
  else{
    toast(' Not allowed more the 20 credit ')
  }

  }
    

  }

  return (
    <div className='bg-slate-200 p-4'>
      <ToastContainer></ToastContainer>
     

      <h1 className='text-4xl font-bold text-center'>Corse Registration</h1>
      <div className='flex gap-3 mt-3'>
        <Blogs
          handalCredit={handalCredit}

        ></Blogs>
         
        <Marks
        
          credits={credits}
          Price={Price}
          Titles={Titles}
          RemainingCredit={RemainingCredit}
        ></Marks>
      </div>

    </div>
  )
}

export default App
