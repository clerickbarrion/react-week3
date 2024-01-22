import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Task from './components/task'
import {useNavigate} from 'react-router-dom'

export default function Home() {
    const [list,setList] = useState([])
    useEffect(()=>{
        !localStorage.getItem('tasks') ? setList([]) : setList(JSON.parse(localStorage.getItem('tasks')))
    },[])
    const navigate = useNavigate()
  return (
    <main>
      {!list.length ? <p>No tasks</p> : list.map(task=><Task self={task} navigate={navigate}/>)}
    </main>
    
  )
}
