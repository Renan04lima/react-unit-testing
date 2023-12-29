import { useState } from 'react'

type ListProps = {
  initialItems: string[]
}

function List({initialItems}: ListProps) {
  const [list, setList] = useState<string[]>(initialItems)

  const [newItem, setNewItem] = useState<string>('')

  function add() {
    setTimeout(() => {
      // simulate api call
      setList([...list, newItem])
      setNewItem('')
    }, 500);
  }

  function remove(item: string) {
    setTimeout(() => {
      // simulate api call
      setList(list.filter((i) => i !== item))

    }, 500);
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
          <li key={index}>
            {item} 
            <button onClick={() => remove(item)}>Remover</button>
            </li>
        ))}
      </ul>
    </>
  )
}

export default List
