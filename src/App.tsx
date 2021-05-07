import React,{FC, useState, ChangeEvent} from 'react';
import './App.css';
import {ITask} from './interfaces'

//kod typescripta moramo definisati type za sve sto pravimo

const App:FC = ()=> {
  const [task, setTask] = useState<string>('')
  const [daysToC, setDaysToC] = useState<number>(0)
  //bitno kod object i arrays
  const [todoList, setTodoList] = useState<ITask[]>([])

//return type funkcije :void jer funkcija ne vraca nista(return)
  const handleTask = (e: ChangeEvent<HTMLInputElement>):void => {
    if(e.target.name === 'task'){
      setTask(e.target.value)
    }else {
      //moramo pretvoriti u number jer iz inputa imamo string a stavili smo useState da ocekuje number
      setDaysToC(Number(e.target.value))
    } 
  }

  const handleTodo = ():void => {
    const newTask = {
      taskName: task,
      deadline: daysToC
    }
        setTodoList([...todoList, newTask])
        setDaysToC(0)
        setTask('')
  }


  return (
    <div className='App'>
      <div className='header'>
        <input 
        type='text'
        placeholder='Add your todo'
        value={task}
        onChange={handleTask}
        name='task'
        />
        <input
        type='number'
        placeholder='Add time to complete'
        value={daysToC}
        name='daystoc'
        onChange={handleTask}
        />
        <button onClick={handleTodo} >Add todo</button>
      </div>
      <div className='todolist'>
        <ul>
        {todoList && todoList.map((item: ITask, i:number) => (
          <li key={i}>{item.taskName} - {item.deadline} days</li>
        ) )}
        </ul>
      </div>
    </div>
  );
}

export default App;
