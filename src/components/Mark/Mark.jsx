

const Mark = ({title}) => {
    let count=0
    count++;

    return (
          <>
                <ol className="">
                    <li>{count} {title}</li>
                    
                </ol>
        </>
        
    );
};

export default Mark;