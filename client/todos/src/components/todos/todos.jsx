import React from 'react';
import styles from './todos.css';


const Todos = props => (
    <div>
        <h1>TODOLIST</h1>
        <form onSubmit={props.onHandleSubmit}>
            <input onChange={props.onHandleTodo} type="text" placeholder="Add Todo (Enter to add)"/>
            
        </form>
        <ul>
            {props.todos.map((todos, i) => (
                <li onClick={() => props.onHandleComplete(todos._id, todos.completed)} style={{textDecoration: todos.completed ? 'line-through' : null}} key={i}>{todos.name} <span onClick={() => props.onHandleDelete(todos._id)}>X</span></li>
            ))}
        </ul>   
    </div>
);

export default Todos;