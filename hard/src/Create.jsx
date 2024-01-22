import React from 'react'

export default function Create() {
    function createTask(){
        const name = document.getElementById('name').value 
        const desc = document.getElementById('desc').value 
        const date = document.getElementById('date').value
        const message = document.getElementById('message')
        const task = {name, desc, date}
        if (!localStorage.getItem('tasks')) localStorage.setItem('tasks', "[]")
        if (!name) {message.textContent = 'Give the task a name'; return}
        const list = JSON.parse(localStorage.getItem('tasks'))
        for (let i of list){
            if (name === i.name){
                message.textContent = 'Tasks must have unique names'
                return
            }
        }
        list.push(task)
        localStorage.setItem('tasks', JSON.stringify(list))
        message.textContent = 'Task added'
    }
    return (
        <div className='edit'>
            <h3 id='message'></h3>
            <input id='name' placeholder='Task Name'/>
            <textarea id='desc' placeholder='Description'/>
            <input id='date' type='datetime-local'/>
            <button onClick={createTask}>Create</button>
        </div>
    )
}
