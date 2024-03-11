import {Route, Routes} from "react-router-dom";
import TodoList from "./TodoList.tsx";
import AddTodo from "./AddTodo.tsx";
import Mainpage from "./Mainpage.tsx";



function App() {
    return (
        <>
            <header> <div id="bar">
                <a id="Home" href="/">
                    Home
                </a>
                <a id="ToDo_erstellen" href="/todo_create" >
                    ToDo erstellen
                </a>

                <a id="ToDo_Anzeigen" href="/todo">
                    ToDo Anzeigen
                </a>
            </div></header>
            <Routes>
                <Route path="/" element={<Mainpage/>}/>
                <Route path="/todo" element={<><TodoList/></>}/>
                <Route path="/todo_create" element={<><AddTodo/></>}></Route>
            </Routes>
        </>

    );
}

export default App;
