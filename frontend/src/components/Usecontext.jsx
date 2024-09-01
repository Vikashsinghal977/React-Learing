import React from 'react'


const Row = ({ data }) => {
    return (
        <div>{data}</div>
    )
}

function Usecontext({data}) {
  return (
    <div>
      <Row data={data}/>
    </div>
  )
}

export default Usecontext
