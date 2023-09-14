import {  BiBookOpen } from 'react-icons/bi';


const Blog = ({blog}) => {
    const {title ,img,description,price,cardthours}=blog;
    
    return (
        <div className="bg-white m-2 rounded-lg p-4 space-y-2">
            <img className="mx-auto " src={img} alt="" />
            <h3 className="text-xl font-bold">{title}  </h3>
            <p className="">{description}</p>
            <div className="flex justify-between p-2">
            <div >
                
                <p>price ={price}</p>
            </div>
            <div className='flex gap-2 items-center'>
                <h2><BiBookOpen></BiBookOpen></h2>
                <p>credit:{cardthours}</p>
            </div>
            </div>
            <button className="bg-blue-500 text-white w-full font-bold text-xl py-1 rounded-lg ">select</button>
            
        </div>
    );
};

export default Blog;