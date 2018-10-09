import { User } from './user';
import { Service } from './service';

// Env
import { environment } from '../../environments/environment';
const _APP_IMG_URL = environment.appImageUrl;

export class Director extends User {
    services: Service[] = [];
}