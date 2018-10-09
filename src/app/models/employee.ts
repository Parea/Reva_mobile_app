import { User } from './user';
import { ValidationTimeoff } from './validationtimeoff';
import { Service } from './service';

export class Employee extends User {
    id: any;
    currentServiceId: any;
    Nom: any;
    Prenom: any;
    services: Service[] = [];
    Congées_obtenue: any;
    Congées_en_cours: any;
    Congées_pris: any;
    Congées_restant: any;
    TotalDemandeCongéesValider: any;
    CongéesValider: ValidationTimeoff[];
    // tslint:disable-next-line:max-line-length
    constructor(id?: any, lastName?: any, firstName?: any, services?: any, Congées_obtenue?: any, Congées_en_cours?: any, Congées_pris?: any, Congées_restant?: any, TotalDemandeCongéesValider?: any, CongéesValider?: any, currentServiceId?: any) {
        super();
        this.id = id;
        this.lastName = lastName;
        this.firstName = firstName;
        this.services = services;
        this.Congées_obtenue = Congées_obtenue;
        this.Congées_en_cours = Congées_en_cours;
        this.Congées_pris = Congées_pris;
        this.Congées_restant = Congées_restant;
        this.TotalDemandeCongéesValider = TotalDemandeCongéesValider;
        this.CongéesValider = CongéesValider;
        this.currentServiceId = currentServiceId;
    }

    public getServiceById(serviceId: any): Service {
        return this.services[this.services.findIndex((service) => service.id === serviceId)];
    }

    public addService(service: Service): void {
        this.services.push(service);
    }
}
