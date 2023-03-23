import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addTodo, deleteTodo, importantTodo, doneTodo, ALLTodo } from './redux/reducers/todo';

function App() {

  const dispatch = useDispatch()
  const todos = useSelector((store) => store.todos.todos)

  const [todo, setTodo] = useState('')

  return (
    <div className="App">
      <div>
        <input onChange={(e) => setTodo(e.target.value)} value={todo} type="text"/>
        <button type='button'onClick={() => { dispatch(addTodo(todo))
         setTodo ("")}}>ADD</button >
         
         <div>
          <input type="search" />
          <button>find</button>
         </div>
      </div>
      <ul>
        {
          todos.map((item) =>(
            <li style={{margin:'20px 0', color:item.isImportant ? 'red':'', textDecoration: item.isDone ?'line-through':''}} key={item.id}>{item.title}
            <button type='button' style={{margin: '0 40px'}} onClick={() =>{dispatch(deleteTodo(item.id))}}>delete</button>
            <button type='button' style={{margin: '0 40px'}} onClick={() =>{ dispatch(importantTodo(item.id))}}>important</button>
            <button type='button' style={{margin: '0 40px'}} onClick={() =>{ dispatch(doneTodo(item.id))}}>done</button>
            </li>
          ))
        }
      </ul>
      <button className='button' style={{margin: '0 40px'}} onClick={(item) =>{dispatch(ALLTodo(item.id))}}>
        Delete-All</button>
    </div>
  );
}

export default App;