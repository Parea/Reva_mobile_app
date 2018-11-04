export class Validated {
    created_at: any;
    employee_id: any;
    form_timeoff_id: any;
    validation_date: any;
    validate: any;

    constructor (created_at?: any, employee_id?: any, form_timeoff_id?: any, validation_date?: any, validate?: any) {
        this.created_at = created_at;
        this.employee_id = employee_id;
        this.form_timeoff_id = form_timeoff_id;
        this.validation_date = validation_date;
        this.validate = validate;
    }
}
