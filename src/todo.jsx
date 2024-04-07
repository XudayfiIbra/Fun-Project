import { useState } from "react";


const Todo = () => {
  const [newTask, setNewTask] = useState([]);
  const [todoList, setTodoList] = useState([]); 

  const handleInputChanges = (event) => {
    setNewTask(event.target.value)
  }

  const addNewTask = () => {
    const newTodo = [...todoList, newTask]
    setTodoList(newTodo)
  }

  return (
    <div className="ml-[36em] mt-[10em]">
      {/*add task*/}

      <div>
        <input onChange={handleInputChanges} type="text" className="bg-indigo-200 rounded-lg p-4"/>
        <button onClick={addNewTask} type="submit" className="bg-indigo-400 p-3 rounded-lg ml-2 text-white">add</button>
      </div>
      {/*List*/}
      <div className="mt-6">
          {todoList.map((task) => {
            return <div className="flex mb-2">
              <h1 className="pt-2 rounded w-[20em] text-1xl">{task}</h1>
              <button className="bg-indigo-400 p-2 rounded-lg ml-2 text-white">X</button>
            </div>
          })}
          
      </div>
    </div>
  )
}


export default Todo;