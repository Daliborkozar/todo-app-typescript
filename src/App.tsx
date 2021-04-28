import React,{FC, useState} from 'react';
import './App.css';

//kod typescripta moramo definisati type za sve sto pravimo

const App:FC = ()=> {
  const [task, setTask] = useState<string>('')



  return (
    <div className='App'>
      <div className='header'>
        <input type='text' placeholder='Add your todo'/>
        <input type='number' placeholder='Add time to complete'/>
        <button>Add todo</button>
      </div>
      <div className='todolist'></div>
    </div>
  );
}

export default App;
