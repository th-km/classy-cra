import React from 'react'
import { c } from 'classy-ui/macro'
import logo from './logo.svg'

function App() {
  return (
    <div className={c('font-sans', 'text-center')}>
      <header
        className={c(
          'bg-gray-900',
          'min-h-screen',
          'flex',
          'flex-col',
          'items-center',
          'justify-center',
          'text-2xl',
          'text-white'
        )}
      >
        <img src={logo} className={c('h-64', 'pointer-events-none')} alt="logo" />
        <p>
          Edit <code className={c('font-mono')}>src/App.js</code> and save to reload.
        </p>
        <a
          className={c('text-teal-600')}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
