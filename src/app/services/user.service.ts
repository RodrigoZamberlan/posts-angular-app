import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../shared/models/user.interface';

export interface ILoginRequest {
  email: IUser['email'],
  password: IUser['password']
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'http://localhost:5085/api/users'; //Provide the url for the api

  constructor(private http: HttpClient) { }

  getListOfUsers(): Observable<IUser[] | string> {
    return this.http.get<IUser[] | string>(this.apiUrl);
  }

  createUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(`${this.apiUrl}/register`, user);
  }

  deleteUser(id: string): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/delete`);
  }

  authenticate(loginRequest: ILoginRequest): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/auth`, loginRequest);
  }
}
