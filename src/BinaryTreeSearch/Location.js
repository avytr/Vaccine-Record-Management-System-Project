class Location{
    constructor(location){
        this.id = location.id;
        this.name = location.name;
        this.address = location.address;
    }

    findLocation(id, locationList){
        var current = new Location();      
        current = locationList.filter((location) => {
            return location.id === id;
        })

        return current;
    }

    toString(address){
        return `Số ${address.number} Đường ${address.street}, 
                Phường ${address.ward}, Quận ${address.district},
                TP.${address.city}, ${address.country}` ;
    }
}

export default Location;