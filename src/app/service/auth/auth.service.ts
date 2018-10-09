import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

// Plug-ins
import { NativeStorage } from '@ionic-native/native-storage/ngx';

// Env
import { environment } from './../../../environments/environment';
const _API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private storage: NativeStorage) {}

  public login(loginData: any): Observable<any> {
    return this.http.post(_API_URL + 'login', loginData)
    .pipe(map((user: any) => {
      if (user && user.token) {
        this.storage.setItem('user', user)
        .then(() => console.log('Stored item !', user))
        .catch((e) => console.log('Erreur storing item !', e));
      }
      return user;
    }));
  }

  public logout(): Promise<any> {
    return this.storage.getItem('user').then((user: any) => {
      const headers: HttpHeaders = new HttpHeaders({
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + user.token,
        'Content-Type': 'application/json'
      });
      return this.http.get(_API_URL + 'logout', { headers: headers }).toPromise().then((resp: any) => {
        this.storage.remove('user')
        .then(() => console.log('user out', resp))
        .catch(e => console.log('Erreur logout: ', e));
      });
    }).catch((e) => console.log('Erreur logout: ', e));
  }

  public isLogged(): boolean {
    return (this.storage.getItem('user')) ? true : false;
  }

  public getAuth(): Promise<any> {
    return this.storage.getItem('user')
    .then(user => user)
    .catch(e => console.log('Erreur getAuth stockage user', e));
  }
}
