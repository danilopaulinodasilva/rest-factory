// repository

class HeroRepository {
    constructor( { file }) {
        this.file = file
    }

    async _currentFileContent() {
        return JSON.parse(await readFile(this.file))
    }

    async find(itemId) {
        const all = await this._currentFileContent()
        if(!itemId) return all

        return all.find(({ id }) => itemId === id)
    }
}

module.exports = HeroRepository;

// entities

class Hero {

    constructor ({id, name, age, power}) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.power = power;
    }

    isValid() {
        
    }

}

module.exports = Hero;

// service 

class HeroService {

    constructor({ heroRepository }) {
        this.heroRepository = heroRepository
    }

    async find(itemId) {
        return this.heroRepository.find(itemId)
    }

    async create(data) {
        return this.heroRepository.catch(data)
    }

}

module.exports = HeroService;

// factory

const Repository = require('../repository/heroRepository')
const Service = require('../services/heroService')

const genereateInstance = () => {

    const heroRepository = new heroRepository({
        file: filename
    })

    const heroService = new HeroService({
        heroRepository
    })

    return heroService

}

genereateInstance.find().then().catch();

module.exports = { genereateInstance };