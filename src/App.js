import React, { useRef } from 'react';
import './App.css';
import Input from './components/Input';

function App() {

  const firstNameRef = useRef(null)
  const lastNameRef = useRef(null)
  const submitRef = useRef(null)

  function firstKeyDown(e) {
    if(e.key === 'Enter') {
      lastNameRef.current.focus()
    }
  }

  function lastKeyDown(e) {
    if(e.key === 'Enter') {
      submitRef.current.focus()
    }

  }

  function submitKeyDown() {
    alert('form submitted')

  }

  return (
    <div className="App">
      <header className="App-header">
        <Input type='text' placeholde="enter first name" ref={firstNameRef} onKeyDown={firstKeyDown} />
        <input type='text' placeholde="enter last name" ref={lastNameRef} onKeyDown={lastKeyDown}></input>
        <button ref={submitRef} onKeyDown={submitKeyDown}>Submit</button>
      </header>
    </div>
  );
}

export default App;
