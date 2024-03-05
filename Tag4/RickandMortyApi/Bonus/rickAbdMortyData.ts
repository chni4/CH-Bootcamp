//Chat GPT Teil
export const fetchCharacters = () => {
    return fetch('https://rickandmortyapi.com/api/character/')
        .then(response => response.json())
        .then(data => data.results)
      //chat gpt teil ende
        .catch(error => {
            console.error("No Character", error);
            return [];
        });
};
