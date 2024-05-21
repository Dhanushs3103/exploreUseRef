// packages
import { useRef,useEffect } from 'react'
// local imports

function App() {
  let ref = useRef("");

  useEffect(()=>{
    // on mount focusing on  the input
    ref.current.focus()
  },[])

  return (
    <>
     <input type="text" ref={ref} placeholder='Type something...'  style={{padding: '10px',fontSize: '20px',width: '300px',height: '30px'}} />
    </>
  )
}

export default App
