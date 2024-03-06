import {useNavigate} from "react-router-dom";
import {useState} from "react";

export default function Header(){
    const [value, setValue] = useState<string>()
    const navigate = useNavigate();

    return <div className={"navbar"}>
        <div id={"Home"} className={"pointer"} onClick={() => navigate("/")}>Home</div>
        <form onSubmit={(e) => {
            navigate("/characters/" + value);
            e.preventDefault()}}>
            <input id={"Searchbar"} placeholder={"id"} onChange={(e) => setValue(e.target.value)}/>
        </form>
        <div className={"pointer"} id={"New"} onClick={() => navigate("/characters/new")}>New</div>
        <div className={"pointer"} id={"Characters"} onClick={() => navigate("/characters")}>Characters</div>
    </div>
}