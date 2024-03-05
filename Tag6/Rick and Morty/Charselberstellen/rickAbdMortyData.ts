export const fetchCharacters = () => {
    return fetch('https://rickandmortyapi.com/api/character/')
        .then(response => response.json())
        .then(data => data.results)
        .catch(error => {
            console.error("No Character", error);
            return [];
        });
};
