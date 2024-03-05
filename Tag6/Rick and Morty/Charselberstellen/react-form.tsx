import React, { useState } from "react";

type FormInputType = {
    name: string;
    status: string;
    species: string;
    gender: string;
};

function Form() {
    const [form, setForm] = useState<FormInputType>({
        name: "",
        status: "",
        species: "",
        gender: "",
    });

    const onChangeValues = (name: string, value: string) => {
        setForm(prevForm => ({
            ...prevForm,
            [name]: value,
        }));
    };

    const handleSubmit = (ev: React.FormEvent) => {
        ev.preventDefault();
        console.log(form);

    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input id="name" name="name" type="text" value={form.name} onChange={(e) => onChangeValues(e.target.name, e.target.value)} />
            </div>
            <div>
                <label htmlFor="status">Status:</label>
                <input id="status" name="status" type="text" value={form.status} onChange={(e) => onChangeValues(e.target.name, e.target.value)} />
            </div>
            <div>
                <label htmlFor="species">Species:</label>
                <input id="species" name="species" type="text" value={form.species} onChange={(e) => onChangeValues(e.target.name, e.target.value)} />
            </div>
            <div>
                <label htmlFor="gender">Gender:</label>
                <input id="gender" name="gender" type="text" value={form.gender} onChange={(e) => onChangeValues(e.target.name, e.target.value)} />
            </div>
            <button type="submit">Charakter speichern</button>
        </form>
    );
}

export default  Form;
