import React, {useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import {v4 as uuidv4} from "uuid"  //to create unique id for the list

const TodoForm = ({input,setInput,todos,setTodos,editTodo,setEditTodo}) => {
    const updateTodo = (title, id, completed) => {
        const newTodo = todos.map((todo) =>
          todo.id === id ? { title, id, completed } : todo
        );
        setTodos(newTodo);
        setEditTodo("");
    }; 
    useEffect(() =>{
        if (editTodo) {
            setInput(editTodo.title);
        }
        else{
            setInput("")
        }
    },[setInput, editTodo]) 
    const onInputChange = (event) =>{
        setInput(event.target.value);
    };
    const onFormSubmit = (event) =>{
        event.preventDefault();
        if(!editTodo){
            setTodos([...todos,{id: uuidv4(), title: input, completed:false}]);
            setInput("")
        }       
        else{
            updateTodo(input, editTodo.id,editTodo.completed)
        }
    };
  return (
    <Form onSubmit={onFormSubmit}>
        <div className='input-group mb-3'>
            <input type="text" placeholder='Enter Todo...' className='' value={input} required onChange={onInputChange}/>
            <Button className="btn btn-primary" type='submit'> {editTodo ? "OK" : "Add"} </Button>
            
        </div>
    </Form>
  )
}

export default TodoForm