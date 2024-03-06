import React, { useState } from "react";
import {Character} from "./data.ts";



type FormProps = {
    characters: Character[];
    setCharacters:React.Dispatch<React.SetStateAction<Character[]>>;
}

function Form({setCharacters, characters}: FormProps) {
    const [form, setForm] = useState<Character>({
        "id": characters.length +1,
        "name": "",
        "status": "",
        "species": "",
        "type": "",
        "gender": "",
        "origin": {
            "name": "",
            "url": ""
        },
        "location": {
            "name": "",
            'url': ""
        },
        "image": "",
        "episode": [],
        "url": "",
        "created": ""
    })

    const onChangeValues = (name: string, value: string) => {
        setForm(prevForm => ({
            ...prevForm,
            [name]: value,
        }));
    };

    const handleSubmit = (ev: React.FormEvent) => {
        setCharacters([
            ...characters,
            form
        ])
        ev.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
        <div>

    <input id="name" name="name" value={form.name} placeholder={"name"} onChange={(e) => onChangeValues(e.target.name, e.target.value)} />
    </div>
    <div>
    <input id="status" name="status"  value={form.status} placeholder={"status"} onChange={(e) => onChangeValues(e.target.name, e.target.value)} />
    </div>
    <div>
    <input id="species" name="species"  value={form.species} placeholder={"species"} onChange={(e) => onChangeValues(e.target.name, e.target.value)} />
    </div>
    <div>
    <input id="gender" name="gender"  value={form.gender} placeholder={"gender"} onChange={(e) => onChangeValues(e.target.name, e.target.value)} />
    </div>
    <button type="submit">Charakter speichern</button>
    </form>
);
}

export default  Form;
