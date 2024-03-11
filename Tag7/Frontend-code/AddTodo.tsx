import { useState } from 'react';
import axios from 'axios';



function AddTodo() {
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');

    const Submit = () => {
        axios.post('/api/todo', { description, status })
            .then(() => {
                setDescription('');
                setStatus('');

            })

    };

    return (
        <form onSubmit={Submit}>
            <input id="tl" value={description} onChange={e => setDescription(e.target.value)}/>
            <input id="tll" value={status} onChange={e => setStatus(e.target.value)}/>
            <button type="submit" id="Hin">Hinzufügen</button>

        </form>
    );
}

export default AddTodo;
