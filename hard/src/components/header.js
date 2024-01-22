import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
        <Link to='/'>
            <p>To-do List</p>
        </Link>
        <Link to="/create">
            <button>Create new Task</button>
        </Link>
    </header>
  )
}
