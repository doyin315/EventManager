import { Injectable } from '@angular/core';
import {IUser} from './user.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: IUser;
  loginUser({ userName, password }: { userName: string; password: string; }) {
    if (userName.includes(' ')) {
      let first = userName.split(' ')[0];
      let last = userName.split(' ') [1];
      this.currentUser = {
        id: 1,
        userName: userName,
        firstName: first,
        lastName: last
      }
    }
    else{
      this.currentUser = {
        id: 1,
        userName: userName,
        firstName: userName,
        lastName: ''
      }
    }
  }
  isAuthenticated(){
    return !!this.currentUser;
  }
  updateCurrentUser(firstName: string, lastName: string){
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
  constructor() { }
}
