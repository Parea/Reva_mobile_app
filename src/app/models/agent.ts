import { Employee } from './employee';

// Env
import { environment } from '../../environments/environment';

export class Agent extends Employee {
    // tslint:disable-next-line:max-line-length
    constructor(id?: any, lastName?: any, firstName?: any, fullName?: any, email?: any, avatar?: any, employeeId?: any, serviceId?: any, serviceName?: any, timeoffgranted?: any, timeoffprogress?: any, timeoffvalidated?: any, timeoffnotvalidated?: any, timeofftaken?: any, totaltimeoff?: any, totaltimeoffvalidated?: any, totaltimeoffnotvalidated?: any, currentServiceId?: any) {
        // tslint:disable-next-line:max-line-length
        super(id, lastName, firstName, fullName, email, avatar, employeeId, serviceId, serviceName, timeoffgranted, timeoffprogress, timeoffvalidated, timeoffnotvalidated, timeofftaken, totaltimeoff, totaltimeoffvalidated, totaltimeoffnotvalidated, currentServiceId);
        this.userTypeId = 4;
    }

}
