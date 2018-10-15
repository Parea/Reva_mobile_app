import { User } from './user';
import { ValidationTimeoff } from './validationtimeoff';
import { Service } from './service';

export class Employee extends User {
    currentServiceId: any;
    Nom: any;
    Prenom: any;
    services: Service[] = [];
    serviceName: any;
    timeoffgranted: any;
    timeoffnotvalidated: ValidationTimeoff[];
    timeoffvalidated: ValidationTimeoff[];
    timeoffprogress: any;
    timeofftaken: any;
    totaltimeoff: any;
    totaltimeoffvalidated: any;
    totaltimeoffnotvalidated: any;
    // tslint:disable-next-line:max-line-length
    constructor(lastName?: any, firstName?: any, services?: any, serviceName?: any, timeoffgranted?: any, timeoffprogress?: any, timeoffvalidated?: any, timeoffnotvalidated?: any, timeofftaken?: any, totaltimeoff?: any, totaltimeoffvalidated?: any, totaltimeoffnotvalidated?: any, currentServiceId?: any) {
        super();
        this.lastName = lastName;
        this.firstName = firstName;
        this.serviceName = serviceName;
        this.timeoffgranted = timeoffgranted;
        this.timeoffprogress = timeoffprogress;
        this.timeoffvalidated = timeoffvalidated;
        this.timeoffnotvalidated = timeoffnotvalidated;
        this.timeofftaken = timeofftaken;
        this.totaltimeoff = totaltimeoff;
        this.totaltimeoffvalidated = totaltimeoffvalidated;
        this.totaltimeoffnotvalidated = totaltimeoffnotvalidated;
        this.currentServiceId = currentServiceId;
    }

    public addService(service: Service): void {
        this.services.push(service);
    }
    public getServiceById(serviceId: any): Service {
        return this.services[this.services.findIndex((service) => service.id === serviceId)];
    }

}
