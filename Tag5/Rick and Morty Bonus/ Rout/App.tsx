import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import CharacterSearch from './CharacterSearch';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/characters" element={<CharacterSearch />} />
            </Routes>
        </Router>
    );
}

export default App;
