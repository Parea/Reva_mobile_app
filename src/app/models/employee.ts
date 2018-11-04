import { User } from './user';
import { ValidationTimeoff } from './validationtimeoff';
import { Service } from './service';

// Env
import { environment } from '../../environments/environment';
const _APP_IMG_URL = environment.appImageUrl;

export class Employee extends User {
    service: Service;
    serviceName: any;
    timeoffgranted: any;
    timeoffprogress: any;
    timeofftaken: any;
    totaltimeoff: any;
    totaltimeoffvalidated: any;
    totaltimeoffnotvalidated: any;
    validations: ValidationTimeoff[] = [];
    // tslint:disable-next-line:max-line-length
    constructor(id?: any, lastName?: any, firstName?: any, fullName?: any, email?: any, avatar?: any, userTypeId?: any, gender?: any, token?: any, employeeId?: any, serviceId?: any, serviceName?: any, timeoffgranted?: any, timeoffprogress?: any, timeofftaken?: any, totaltimeoff?: any, totaltimeoffvalidated?: any, totaltimeoffnotvalidated?: any) {
        super(id, lastName, firstName, fullName, email, avatar, userTypeId, gender, token, employeeId, serviceId);
        this.serviceName = serviceName;
        this.timeoffgranted = timeoffgranted;
        this.timeoffprogress = timeoffprogress;
        this.timeofftaken = timeofftaken;
        this.totaltimeoff = totaltimeoff;
        this.totaltimeoffvalidated = totaltimeoffvalidated;
        this.totaltimeoffnotvalidated = totaltimeoffnotvalidated;
    }


    public addValidation(validation: ValidationTimeoff): void {
        this.validations.push(validation);
    }

    public getValidationById(validationId: any): ValidationTimeoff {
        return this.validations[this.validations.findIndex((validation) => validation.id === validationId)];
    }
}
