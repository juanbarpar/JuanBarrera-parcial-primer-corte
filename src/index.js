import RickAndMortyService from './service';

const service = new RickAndMortyService();

function createCharacterCard(character) {
    return `
    <article class="content" id="${character.id}">

        <img src="${character.image}" alt="">
        
        <div class="card">

            <div class="top">
                <h2 class="Name">${character.name}</h2>
                <span class="status"><span class="status__icon__${character.status}"></span> ${character.status} - ${character.species}</span>
            </div>

            <div class="mid">
                <p class="last">Last known location:</p>
                <p class="location">${character.location}</p>
            </div>      
            <div class="bot">
                <p class="first">First seen in:</p>
                <p class="location">${character.firstSeen}</p>
            </div>
        </div>
    </article>
    `;
}

function addCharacterListeners(character) {
    const characterElement = document.querySelector(`#${character.id}`);
    
    characterElement.addEventListener('click', () => {
        console.log(`Hola, soy ${character.name}`);
    });
}

function createCharacterList() {
    const container = document.querySelector('.character-list');
    
    service.getAllCharacters()
        .then(characters => {
            characters.forEach(character => {
                const characterCard = createCharacterCard(character);
                container.innerHTML += characterCard;
                addCharacterListeners(character);
            });
        })
        .catch(error => {
            console.error('An error occurred:', error);
        });
}

createCharacterList();

