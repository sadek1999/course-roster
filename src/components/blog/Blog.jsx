


const Blog = ({blog}) => {
    const {title ,img}=blog;
    
    return (
        <div>
            <img src={img} alt="" />
            <h3>{title}  </h3>
        </div>
    );
};

export default Blog;