import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private _http:Http) {}

  loginUser(userData){
    let username: string = userData.username;
    let password: string = userData.password;
    let headers: Headers = new Headers();
    headers.append("Authorization", "Basic " + btoa(username + ":" + password)); 
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    return this._http.post('http://206.189.117.22:5000/api/login', userData, {headers: headers})   
    // httpHeader = new HttpHeaders({'Content-type': 'application/json', 'charset': 'utf-8'});
    // constructor(private http:HttpClient) { }
    // loginUser(userData: any):Observable<any> {
    // return this.http.post('http://206.189.117.22:5000/api/login', {headers: this.httpHeader});
     
  }
}
