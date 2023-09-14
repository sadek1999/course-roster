
import './App.css'
import Blogs from './components/blogs/Blogs'
import Head from './components/header/Head'

function App() {
  

  return (
    <>
      
      <h1 className='text-4xl font-bold text-center'>Corse Registration</h1>
      <div className='flex gap-3 mt-3'>
        <Blogs></Blogs>
        <Head></Head>
      </div>
      
    </>
  )
}

export default App
