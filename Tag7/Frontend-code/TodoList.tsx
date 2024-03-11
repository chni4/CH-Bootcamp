import axios from 'axios';
import {useEffect, useState} from "react";

type TodoType = {
    "id": string;
    "description": string;
    "status": string;
}


function TodoList()  {
    const [todos, setTodos] = useState<TodoType[]>([]);

    useEffect(() => {
        axios.get('/api/todo')
            .then(response => setTodos(response.data))
    }, []);


    return (
        <div>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>{todo.description}{todo.status}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
