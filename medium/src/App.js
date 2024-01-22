import './App.css'
import React, { Component } from 'react'

import Header from './components/header'
import Footer from './components/footer'
import InputMovie from './components/inputMovie'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <main>
        <InputMovie/>
        </main>
        <Footer/>
      </div>
    )
  }
}
