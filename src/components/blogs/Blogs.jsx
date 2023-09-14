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
        <div className="bg-green-100 w-3/4">
            <h2 className="text-5xl font-bold">Blogs :{blogs.length}</h2>
           {
           blogs.map(blog=><Blog 
           blog={blog}
           key={blog.id}></Blog>)
           }
        </div>
    );
};

export default Blogs;