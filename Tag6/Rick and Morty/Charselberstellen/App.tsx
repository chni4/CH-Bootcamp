import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import CharacterSearch from './CharacterSearch';
import { useState } from "react";
import CharacterForm from "./react-form.tsx";
import { FormInputType } from "./react-form.tsx";

const App = () => {
    const [characters, setCharacters] = useState<FormInputType[]>([]);

    const saveCharacter = (newCharacter: FormInputType) => {
        setCharacters([...characters, { ...newCharacter, id: characters.length + 1 }]);
    };

    return (
        <>
            <div>
                <CharacterForm onSave={saveCharacter}/>

            </div>
            <Router>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/characters" element={<CharacterSearch/>}/>
                </Routes>
            </Router></>
    );
};









export default App;
