function CharacterList({ characters, showNext, onShowNext }) {
    return (
        <div>
            {characters.length > 0 ? (
                characters.map(character => (
                    <div className={"position"} key={character.id}>{character.name}</div>
                ))
            ) : (
                <p className={"position"}>Keine Charaktere gefunden.</p>
            )}
            {showNext && (
                <button onClick={onShowNext} className={"position"}>Mehr Laden</button>
            )}
        </div>
    );
}

export default CharacterList;
