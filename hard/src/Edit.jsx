import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Edit() {
  const location  = useLocation()

  function deleteTask(){
    const list = JSON.parse(localStorage.getItem('tasks'))
    localStorage.setItem('tasks',JSON.stringify(list.filter(task=>task.name!==location.state.name)))
    document.getElementById('message').textContent = 'Task deleted'
  }
  function edit(){
    const list = JSON.parse(localStorage.getItem('tasks'))
    list.map(task=>{
      if (task.name === location.state.name){
        task.name = document.getElementById('name').value
        task.desc = document.getElementById('desc').value
        task.date = document.getElementById('date').value
        return task
      } else {
        return task
      }
    })
    localStorage.setItem('tasks', JSON.stringify(list))
    document.getElementById('message').textContent = 'Changes saved'
  }
  return (
    <div className='edit'>
        <h3 id='message'></h3>
        <input id='name' defaultValue={location.state.name} placeholder='Task Name'/>
        <textarea id='desc' defaultValue={location.state.desc} placeholder='Description'/>
        <input id='date' defaultValue={location.state.date} type='datetime-local'/>
        <button onClick={deleteTask}>Delete</button>
        <button onClick={edit}>Save Changes</button>
    </div>
  )
}
