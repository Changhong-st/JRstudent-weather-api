class City {
    constructor(init_data){
        this.name = init_data.name;
        this.coord = init_data.coord;
        this.country = init_data.country;
        this.population = init_data.population;
    }
}

module.exports = City;