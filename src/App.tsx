import { useState } from 'react'

function App() {
  const [list, setList] = useState<string[]>(['typescript', 'java', 'python'])

  function add() { 
    setList([...list, 'javascript'])
  }   
  return (
    <>
      <button onClick={add}>Adicionar</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  )
}

export default App
