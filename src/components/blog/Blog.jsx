import {  FaBeer } from 'react-icons/fa';


const Blog = ({blog}) => {
    const {title ,img,description,price,cardthours}=blog;
    
    return (
        <div className="bg-slate-200 m-2 rounded p-4 space-y-2">
            <img className="mx-auto " src={img} alt="" />
            <h3 className="text-xl font-bold">{title}  </h3>
            <p className="">{description}</p>
            <div className="flex justify-between">
            <div >
                
                <p>price ={price}</p>
            </div>
            <div className='flex gap-2 items-center'>
                <h2><FaBeer></FaBeer></h2>
                <p>credit:{cardthours}</p>
            </div>
            </div>
            <button className="bg-blue-400 text-white w-full text-xl py-1 rounded-lg ">select</button>
            
        </div>
    );
};

export default Blog;