import Vaccine from './Vaccine';
import Location from './Location';

class Injection{
    constructor(dose){
        
        this.vaccine = new Vaccine(dose.vaccine);
        this.injection_date = dose.injectionDate;
        this.adverse_reaction = dose.adverseReaction;
        this.location = new Location(dose.location);
    }

    toString(dose){
        
    }
}

export default Injection;