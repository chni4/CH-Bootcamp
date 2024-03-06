import './App.css';
import {Route, Routes} from "react-router-dom";
import AllCharacters from "./AllCharacters.tsx";
import {useState} from "react";
import response, {Character} from "./data.ts";
import MainPage from "./MainPage.tsx";
import ReactForms from "./ReactForms.tsx";
import Header from "./Header.tsx";
import CharacterDetail from "./CharacterDetail.tsx";


function App() {

    const [data, setdata] = useState<Character[]>(response.results)

  return (
    <>
        <Header></Header>
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/characters" element={<AllCharacters characters={data} setCharacters={setdata}/>}/>
            <Route path="/characters/new" element={<ReactForms characters={data} setCharacters={setdata}/>}/>
            <Route path="/characters/:id" element={<CharacterDetail characters={data}/>}/>
        </Routes>
    </>
  )
}

export default App
