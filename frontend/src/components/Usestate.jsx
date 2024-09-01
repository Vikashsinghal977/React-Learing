import React, {useEffect, useState} from 'react'

function Usestate() {
    const [add, setAdd] = useState(0);

    useEffect( () => {

        console.log("How to do ");
        
    }, [add]);   // dependesics 

    return (
      <div>
        <button onClick={()=> setAdd(add+1)}>Add</button>
        <p>{a}</p>
        <button onClick={()=> setAdd(add-1)}>subtract</button>
      </div>
    )
}

export default Usestate
