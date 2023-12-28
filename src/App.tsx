import { useState } from 'react'

function App() {
  const [list, setList] = useState<string[]>(['typescript', 'java', 'python'])

  const [newItem, setNewItem] = useState<string>('')

  function add() {
    setList([...list, newItem])
    setNewItem('')
  }

  return (
    <>
      <input
        type="text"
        placeholder='Novo item'
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
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
