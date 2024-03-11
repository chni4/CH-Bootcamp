import {useNavigate} from 'react-router-dom';

function Mainpage() {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/ToDo");

    };
    return (
        <form>
            <div><h1>Wilkommen auf der Todo Seite</h1></div>
        </form>
    );
}

export  default Mainpage