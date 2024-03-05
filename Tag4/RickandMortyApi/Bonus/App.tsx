import { useState, useEffect } from 'react';
import { fetchCharacters } from './rickAbdMortyData';

function App() {
    const [searchTerm, setSearchTerm] = useState('');
    const [data, setData] = useState({ characters: [], filteredCharacters: [] });
    const [currentPage, setCurrentPage] = useState(0);
    const charactersPerPage = 5;

//Chat GPT TEIL
    useEffect(() => {
        (async () => {
            const chars = await fetchCharacters();
            setData({ characters: chars, filteredCharacters: chars });
        })();
    }, []);

    useEffect(() => {
        const filtered = data.characters.filter(character =>
            character.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setData(prev => ({ ...prev, filteredCharacters: filtered }));
        setCurrentPage(0);
    }, [searchTerm, data.characters]);
// CAHT GPT TEIL ENDE

    const showNextCharacters = () => {
        setCurrentPage(currentPage => currentPage + 1);
    };


    const startIndex = currentPage * charactersPerPage;
    const endIndex = startIndex + charactersPerPage;
    const visibleCharacters = data.filteredCharacters.slice(startIndex, endIndex);

    return (
        <div>
            <input className={"position"}
                type="text"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
            <div>
                {visibleCharacters.length > 0 ? (
                    visibleCharacters.map(character => (
                        <div className={"position"} key={character.id}>{character.name}</div>
                    ))
                ) : (
                    <p className={"position"}>Keine Charaktere gefunden.</p>
                )}
            </div>
            {data.filteredCharacters.length > charactersPerPage && (
                <button onClick={showNextCharacters} className={"position"}>Mehr Laden</button>
            )}
        </div>
    );
}

export default App;
