import { useState, useEffect } from 'react';
import { fetchCharacters } from './rickAbdMortyData';
function App() {
    const [searchTerm, setSearchTerm] = useState('');
    const [data, setData] = useState({ characters: [], filteredCharacters: [] });

    useEffect(() => {
        (async () => {
            const chars = await fetchCharacters();
            setData({ characters: chars, filteredCharacters: chars });
        })();
    }, []);

    useEffect(() => {
        const filtered = data.characters.filter(character =>
            character.name.includes(searchTerm)
        );
        setData(prev => ({ ...prev, filteredCharacters: filtered }));
    }, [searchTerm, data.characters]);

    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
            <div>
                {data.filteredCharacters.length > 0 ? (
                    data.filteredCharacters.map(character => (
                        <div key={character.id}>{character.name}</div>
                    ))
                ) : (
                    <p>Keine Charaktere gefunden.</p>
                )}
            </div>
        </div>
    );
}
export default App;
