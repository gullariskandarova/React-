import React from 'react'

const DecrementBtn = ({count, setCount}) => {
  return (
    <button onClick={()=>{
        return setCount(count-1)
    }}>decrement</button>
  )
}

export default DecrementBtn
