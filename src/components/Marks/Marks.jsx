import Mark from "../Mark/Mark";



const Marks = ({credits,Price}) => {
    return (
        <div className=" w-1/4 ">
            
            
                <Mark
                credits={credits}
                Price={Price}
                ></Mark>
            
            
        </div>
    );
};

export default Marks;