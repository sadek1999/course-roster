



const Marks = ({credits,Price,Titles,RemainingCredit}) => {
    return (
        <div className=" w-1/4 ">
            
            <div className="text-start bg-stone-100 p-3 rounded space-y-2">
            <div className=" p-2 border-b-2 ">
            <h4 className="text-xl text-blue-400 font-bold"> Credit Hour Remaining {RemainingCredit} hr </h4>
            </div>
            <div className="text-start p-2 border-b-2">
            <h1 className="text-2xl font-bold">Crouse Name</h1>
           
              {
                Titles.map((title ,idx)=>
                
                <ol  key={idx}>{idx+1} {title}</ol>)
              }
                
            </div>
            <div className="p-3 border-b-2">
                <h3 className="text-xl font-semibold">Total Credit Hour : {credits} </h3>
            </div>
            <div>
                <h1 className="text-2xl font-semibold">Total Price : {Price} USD</h1>
            </div>
            
        </div>

             
                  
            
            
        </div>
    );
};

export default Marks;