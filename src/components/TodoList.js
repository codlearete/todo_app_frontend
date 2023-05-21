import React from 'react';
import './TodoList';

const TodoList = ({ todos, setTodos, setEditTodo }) => {
    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return { ...item, completed: !item.completed };
                }
                return item;
            })
        );
    };

    const handleEdit = (todo) => {
        const findTodo = todos.find((item) => item.id === todo.id);
        setEditTodo(findTodo);
    };

    const handleDelete = (todo) => {
        setTodos(todos.filter((item) => item.id !== todo.id));
    };

    return (
        <div className="container center-container">
            {todos.map((todo) => (
                <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <button
                            type="button"
                            className={`btn ${todo.completed ? "btn-success" : "btn-light"} mr-3`}
                            onClick={() => handleComplete(todo)}
                        >
                            {todo.completed ? (
                                <i className="fa fa-check-circle"></i>
                            ) : (
                                <i className="far fa-circle"></i>
                            )}
                        </button>
                        <input
                            type="text"
                            value={todo.title}
                            className={`list ${todo.completed ? "completed" : ""}`}
                            onChange={(event) => event.preventDefault()}
                        />
                    </div>
                    <div>
                        <button
                            type="button"
                            className="btn btn-secondary mr-2"
                            onClick={() => handleEdit(todo)}
                        >
                            <i className="fa fa-edit"></i>
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => handleDelete(todo)}
                        >
                            <i className="fa fa-trash"></i>
                        </button>
                    </div>
                </li>
            ))}
        </div>
    );
};

export default TodoList;
