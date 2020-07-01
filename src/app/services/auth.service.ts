import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(
    private http: HttpClient,
    private router: Router) {

    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user !== null) {
      this.currentUserSubject = new BehaviorSubject<User>(user);
    } else {
      this.currentUserSubject = new BehaviorSubject<User>(null);
    }
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login() {
    const data = { name: 'Dummy User' };
    localStorage.setItem('currentUser', JSON.stringify(data));
    this.currentUserSubject.next(data);
  }

  logout() {
    this.currentUserSubject.next(null);
  }
}
