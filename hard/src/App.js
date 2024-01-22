import './App.css';
import React, { Component, useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/header';
import Task from './components/task';
import Create from './Create';
import Home from './Home';
import Edit from './Edit';
function TaskList(){
  const [list,setList] = useState([])
    useEffect(()=>{
        !localStorage.getItem('tasks') ? setList([]) : setList(JSON.parse(localStorage.getItem('tasks')))
    },[])
  return (
    <>
      {!list.length ? <p>No tasks</p> : list.map(task=><Task self={task}/>)}
    </>
  )
}
export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/create' element={<Create/>}/>
            <Route path='/edit' element={<Edit/>}/>
          </Routes>
        </Router>
      </div>
    )
  }
}

