import {Employee} from './employee';
export class ValidationTimeoff {
    id: any;
    motif: any;
    otherMotif: any;
    startTimeoff: any;
    endTimeoff: any;
    numbersTaken: any;
    employeeId: any;
    managerId: any;
    serviceId: any;
    validate: any;
    validationDate: any;
    createdAt: any;
    updatedAt: any;
    // tslint:disable-next-line:max-line-length
    constructor (createdAt?: any, employeeId?: any, endTimeoff?: any , id?: any, managerId?: any , motif?: any, numbersTaken?: any , otherMotif?: any, serviceId?: any , startTimeoff?: any, updatedAt?: any, validate?: any, validationDate?: any) {
        this.createdAt = createdAt;
        this.employeeId = employeeId;
        this.endTimeoff = endTimeoff;
        this.id = id;
        this.managerId = managerId;
        this.motif = motif;
        this.numbersTaken = numbersTaken;
        this.otherMotif = otherMotif;
        this.serviceId = serviceId;
        this.startTimeoff = startTimeoff;
        this.updatedAt = updatedAt;
        this.validate = validate;
        this.validationDate = validationDate;
    }
}
