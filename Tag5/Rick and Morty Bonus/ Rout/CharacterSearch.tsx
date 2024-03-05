import { useState, useEffect } from 'react';
import { fetchCharacters } from './rickAbdMortyData';
import CharacterList from './CharacterList';

function CharacterSearch() {
    const [searchTerm, setSearchTerm] = useState('');
    const [data, setData] = useState({ characters: [], filteredCharacters: [] });
    const [currentPage, setCurrentPage] = useState(0);
    const charactersPerPage = 5;
//Chat GPT Teil
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
// Chat gpt teil ende
    const showNextCharacters = () => {
        setCurrentPage(currentPage => currentPage + 1);
    };

    return (
        <div>
            <input
                className={"position"}
                type="text"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
            <CharacterList
                characters={data.filteredCharacters.slice(currentPage * charactersPerPage, (currentPage + 1) * charactersPerPage)}
                showNext={data.filteredCharacters.length > currentPage * charactersPerPage + charactersPerPage}
                onShowNext={showNextCharacters}
            />
        </div>
    );
}

export default CharacterSearch;
