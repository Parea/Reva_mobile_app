export class Validated {
    created_at: any;
    employee_id: any;
    form_timeoff_id: any;
    manager_validation_date: any;
    validated: any;

    constructor (created_at?: any, employee_id?: any, form_timeoff_id?: any, manager_validation_date?: any, validated?: any) {
        this.created_at = created_at;
        this.employee_id = employee_id;
        this.form_timeoff_id = form_timeoff_id;
        this.manager_validation_date = manager_validation_date;
        this.validated = validated;
    }
}
