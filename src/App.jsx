
import './App.css'
import Blogs from './components/blogs/Blogs'
import Head from './components/header/Head'

function App() {
  

  return (
    <div className='bg-slate-200 p-4'>
    
      <h1 className='text-4xl font-bold text-center'>Corse Registration</h1>
      <div className='flex gap-3 mt-3'>
        <Blogs></Blogs>
        <Head></Head>
      </div>
      
      </div>
  )
}

export default App
