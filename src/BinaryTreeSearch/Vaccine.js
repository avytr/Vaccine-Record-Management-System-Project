class Vaccine{
    constructor(vaccine){
        this.id = vaccine.id;
        this.name = vaccine.name;
        this.quantity = vaccine.quantity;
        this.country = vaccine.country;
        this.mfg = vaccine.mfg
    }

    findVaccine(id, vaccineList){
        var current = new Vaccine();
        
        current = vaccineList.filter((vaccine) => {
            return vaccine.id === id;
        })

        return current;
    }

    toString(vaccine) {
        return `Vaccine: ${vaccine.name}     ID: ${vaccine.id}`
    }
}

export default Vaccine;