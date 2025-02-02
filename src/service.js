class RickAndMortyService {
    constructor() {
        this.url = 'https://rickandmortyapi.com/api/character';
    }

    getAllCharacters() {
        return fetch(this.url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error...');
                }
                return response.json();
            })
            .then(data => {

                const characters = data.results.map(character => ({
                    name: character.name,
                    status: character.status,
                    species: character.species,
                    firstSeen: character.origin.name,
                    location: character.location.name,
                    image: character.image,
                    student: "Juan Camilo Barrera", 
                    code: "0000226374" 
                }));

                console.log(data)
                
                return characters;
            })
            .catch(error => {
                console.error('An error occurred:', error);
                throw error;
            });
    }
}

export default RickAndMortyService;
