


const Blog = ({blog}) => {
    const {title ,img,description}=blog;
    
    return (
        <div className="bg-yellow-50 m-2 rounded p-4">
            <img className="mx-auto " src={img} alt="" />
            <h3 className="text-xl font-bold">{title}  </h3>
            <p>{description}</p>
        </div>
    );
};

export default Blog;