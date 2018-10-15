import { User } from './user';
import { Employee } from './employee';
import { Service } from './service';

// Env
import { environment } from '../../environments/environment';
const _APP_IMG_URL = environment.appImageUrl;

export class Agent extends User {
    currentServiceId: any;
    services: Service[] = [];

    // tslint:disable-next-line:max-line-length
    constructor (id?: any, lastName?: any, firstName?: any, avatar?: any, email?: any, gender?: any, token?: any, employeeId?: any, serviceId?: any, employee?: any) {
        super();
        this.id = id;
        this.lastName = lastName;
        this.firstName = firstName;
        this.fullName = lastName + ' ' + firstName;
        this.avatar = _APP_IMG_URL + avatar;
        this.email = email;
        this.gender = gender;
        this.token = token;
        this.userTypeId = 4;
        this.employeeId = employeeId;
        this.serviceId = serviceId;
    }

    public addService(service: Service): void {
        this.services.push(service);
    }
    public getServiceById(serviceId: any): Service {
        return this.services[this.services.findIndex((service) => service.id === serviceId)];
    }
}
