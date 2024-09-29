import React, { useState } from 'react'

const ToDoList = () => {
    const [tasks, setTasks] = useState(['dowex','qra qoran']);
    const [newTask, setNewTask] = useState("");
    function HandleInputChange(event) {
        setNewTask(event.target.value)
    }
    function addTask() {
        
    }
    function deleteTask(index) {
        
    }
    function moveTaskUp(index) {
        
    }
    function moveTaskDown(index) {
        
    }
  return (
    <>
        <div className='to-do-list'>
              <h1>To-Do-List</h1>  
              <div>
                  <input type="text" name="" id=""
                      placeholder='Enter a Task ....'
                      value={newTask}
                      onChange={HandleInputChange} />
                  <button className='add-button'
                  onClick={addTask}>
                      Add
                  </button>
              </div>
              <ol>
                  {tasks.map((task, index) => (
                      <li key={index}>
                          <span className='text'> {task}</span>
                          <button onClick={() => deleteTask(index)} className='delete-btn'>Delete</button>
                          <button onClick={() => moveTaskUp(index)} className='up-btn'>UP</button>
                          <button onClick={()=>moveTaskDown(index)} className='down-btn'>Down</button>
                      </li>
                  ))}
              </ol>
      </div>
    </>
  )
}

export default ToDoList
