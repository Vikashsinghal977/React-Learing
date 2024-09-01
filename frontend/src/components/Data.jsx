import React, {useState} from 'react'

function Data() {
    const [inputData, setInputData] = useState(0);
    console.log("This is",inputData)
  
    const add = () =>{
      setInputData(inputData+1);
    }
    const sub = () =>{
      setInputData(inputData-1);
    }
  
  
  
    return (
      <div>
        <input type="number" value={inputData} readOnly/>
        <button onClick={add}> add</button>
        <button onClick={sub}> Subtract</button>
      </div>  
    )
  
}


export default Data
