export class ValidationTimeoff {
    id: any;
    formId: any;
    employeeId: any;
    managerId: any;
    validate: any;
    managerValidationsDate: any;
    constructor (id?: any, employeeId?: any, managerId?: any, validate?: any, formId?: any, managerValidationsDate?: any) {

        this.id = id;
        this.formId = formId;
        this.employeeId = employeeId;
        this.managerId = managerId;
        this.validate = validate;
        this.managerValidationsDate = managerValidationsDate;
    }
}
