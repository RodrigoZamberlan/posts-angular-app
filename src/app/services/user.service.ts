import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../shared/models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'http://localhost:5085/api/users'; //Provide the url for the api

  constructor(private http: HttpClient) { }

  getListOfUsers(): Observable<IUser[] | string> {
    return this.http.get<IUser[] | string>(this.apiUrl);
  }

  getUser(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(`${this.apiUrl}/register`, user);
  }

  deleteUser(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/delete`);
  }

  authenticate(email: string, password: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/auth`);
  }
}
