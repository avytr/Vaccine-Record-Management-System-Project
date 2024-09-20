import Injection from './Injection';

class Record {
    constructor(record){
        this.id = record.id;
        this.name = record.name;
        this.birthday = record.birthday;
        this.gender = record.gender;
        this.address = record.address;
        this.dose1 = new Injection(record.dose1);
        if (record.dose2.injectionDate != undefined)
            this.dose2 = new Injection(record.dose2);
           
        if (record.dose3.injectionDate != undefined)
            this.dose3 = new Injection(record.dose3);

        if (record.dose4.injectionDate != undefined)
            this.dose4 = new Injection(record.dose4);

    }

    toStringAddress(address){
        return `Số ${address.number} Đường ${address.street}, 
                Phường ${address.ward}, Quận ${address.district},
                TP.${address.city}, ${address.country}` ;
    }
}

export default Record;