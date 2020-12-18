import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password){
    console.log('before '+this.isUserLoggedIn());
    if(username==="dj" && password==="pass"){
      sessionStorage.setItem('authenticateuser',username);
      console.log('after '+this.isUserLoggedIn());
      return true;
    }else{
      return false;
    }
    
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticateuser');
    return !(user === null);
  }

  logout(){
    sessionStorage.removeItem('authenticateuser');
  }
}