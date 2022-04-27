import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router
  ) { }

  getAuthStatus(){
    return localStorage.getItem('isAuthenticated') === 'true' ? true : false;
  }
  login(){
    return localStorage.removeItem('isAuthenticated');
  }
  logout(){
    localStorage.setItem('isAuthenticated', 'false');
    this.router.navigate(['']);
  }
}
