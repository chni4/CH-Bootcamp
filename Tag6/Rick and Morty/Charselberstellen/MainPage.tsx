import { useNavigate } from 'react-router-dom';

function MainPage() {
    const navigate = useNavigate();


    const handleNavigate = () => {
        navigate("/characters");
    };

    return (

        <div style={{ textAlign: 'center', marginTop: '50px', marginLeft: "550%" }}>

            {}
            <button className="button" onClick={handleNavigate}>
                <div className="lid">
                    <span className="side top"></span>
                    <span className="side front"></span>
                    <span className="side back"> </span>
                    <span className="side left"></span>
                    <span className="side right"></span>
                </div>
                <div className="panels">
                    <div className="panel-1">
                        <div className="panel-2">
                            <div className="btn-trigger">
                                <span className="btn-trigger-1"></span>
                                <span className="btn-trigger-2"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <span>Character Search</span>
            </button>
        </div>

    );

}

export default MainPage;
