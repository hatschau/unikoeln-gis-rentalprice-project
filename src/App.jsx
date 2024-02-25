import { useState } from 'react'

import './App.css'
import Homepage from './Homepage/Homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Homepage/>
        
      </div>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
     
    </>
  )
}

export default App
