import { useEffect, useState } from "react";
import Blog from "../blog/Blog";



const Blogs = () => {
    const [blogs,setblogs]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setblogs(data))
    
    },[])
    return (
        <div className=" w-3/4 grid grid-cols-3 ">
            
           {
           blogs.map(blog=><Blog 
           blog={blog}
           key={blog.id}></Blog>)
           }
        </div>
    );
};

export default Blogs;