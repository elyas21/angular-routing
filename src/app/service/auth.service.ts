import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAdmin(){
   return of(true)
  }

  isLoggedIn(){
    return of(true)
  }
}
