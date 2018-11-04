import { environment } from '../../environments/environment';
const _APP_IMG_URL = environment.appImageUrl;
export class User {
    id: any;
    lastName: any;
    firstName: any;
    fullName: any;
    email: any;
    avatar: any;
    userTypeId: any;
    gender: any;
    token: any;
    serviceId: any;
    employeeId: any;

    // tslint:disable-next-line:max-line-length
    constructor (id?: any, lastName?: any, firstName?: any, fullName?: any, email?: any, avatar?: any, userTypeId?: any, gender?: any, token?: any, employeeId?: any, serviceId?: any) {
        this.id = id;
        this.lastName = lastName;
        this.firstName = firstName;
        this.fullName = fullName;
        this.email = email;
        this.avatar = _APP_IMG_URL + avatar;
        this.userTypeId = userTypeId;
        this.gender = gender;
        this.token = token;
        this.employeeId = employeeId;
        this.serviceId = serviceId;
    }
}
