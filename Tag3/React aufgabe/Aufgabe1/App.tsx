import React, { useState } from 'react';
import './App.css';

function App() {
    const [showImage, setShowImage] = useState(false);


    const ig1 = "data:image/jpeg;base64,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";
    const ig2 = "https://media2.giphy.com/media/QBwREnEMefRErzyOKK/giphy.gif?cid=6c09b952836jtb4bi0gibfo0ut9li6ew4qq6rtomvicy03f6&ep=v1_stickers_related&rid=giphy.gif&ct=s";
    const ig3 = "https://media.tenor.com/2Ewgz7BboC8AAAAM/max-max-verstappen.gif";
    const ig4 = "https://media.formula1.com/image/upload/content/dam/fom-website/manual/2023/rb19.png.transform/6col/image.jpg"
    const ig5 = "https://media.tenor.com/Pt6L9EVsEhAAAAAM/stubouk-subway-surfers.gif"
    const ig6 = "https://i.pinimg.com/originals/c8/46/3e/c8463e4792c483d20159e1836ab11b32.gif"
    const ig7 = "https://www.hatchwise.com/wp-content/uploads/2021/12/Screen-Shot-2021-12-22-at-7.31.56-AM-1024x607.png"
    const handleClick = () => {
        setShowImage(true);

        setTimeout(() => {
            setShowImage(false);
        }, 5000);
    };

    return (
        <div className="App">
            <div id="virRed"></div>
            <div id="virBlue"></div>
            <div id="sideYellow"></div>
            <div id="sideGrey"></div>
            <header className="App-header">
                <img src={ig1}  id="Max" />
                <img src={ig2}  id="Rebull" />
                <img src={ig4}  id="F1Car" />
                <img src={ig5}  id="Game" />
                <img src={ig6}  id="MaxAffe" />
                <img src={ig7} id="Redbull" />

                <h1 className="h1" onClick={handleClick} id="Klick"> Klick ME :D
                </h1>

                <h1 className="h1" id="titel">RedBull Kuan Lothe</h1>

                {showImage && <img src={ig3} id="jump" />}
            </header>
        </div>
    );
}

export default App;
