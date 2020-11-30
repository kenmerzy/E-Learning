import React from 'react'
import '../css/App.css'
import logo from '../logo.svg'

const HomePage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome Ngọc Long
        </p>
        <p>
          This is Home
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default HomePage
