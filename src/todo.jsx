import { useState } from "react";


const Todo = () => {
  const [newTask, setNewTask] = useState([]);
  const [todoList, setTodoList] = useState([]); 

  const handleInputChanges = (event) => {
    setNewTask(event.target.value)
  }

  const addNewTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false
    };
    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id))
  }

  const taskCompleted = (id) => {
    setTodoList(
      todoList.map((task) => {
        console.log('is working');
        if (task.id === id) {
          return{...task, completed: true}
          
        }
        else {
          return task;
        }
      })
    )
  }

  return (
    <div className="ml-[42em] mt-[15em]">

      <div>
        <input onChange={handleInputChanges} type="text" className="bg-indigo-200 rounded-lg p-4"/>
        <button onClick={addNewTask} type="submit" className="bg-indigo-400 p-3 rounded-lg ml-2 text-white">add</button>
      </div>
      {/*List*/}
      <div className="mt-6" >
          {todoList.map((task) => {
            return <div className="flex mb-2">
              <h1 className="pt-2 rounded w-[20em] font-bold text-1xl" style={{color: task.completed ? "green" : "black"}}>{task.taskName}</h1>
      
              <button onClick={() => taskCompleted(task.id)} className="bg-indigo-400 p-2 rounded-lg ml-2 text-white">Completed</button>
              <button onClick={() => deleteTask(task.id)} className="bg-indigo-400 p-2 rounded-lg ml-2 text-white">Delete</button>
            </div>
          })}
          
      </div>
    </div>
  )
}


export default Todo;