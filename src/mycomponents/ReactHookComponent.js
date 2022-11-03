import React, {useState} from 'react'

function ReactHookComponent() {

    const [count, setCount]=useState(0)
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>Count {count}</button>
    </div>
  )
}

export default ReactHookComponent
