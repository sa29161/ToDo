import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(
      private http: HttpClient
  ) { }

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

    
//   executeHelloWorldBeanService(){
//     return this.http.get<AuthenticationBean>('http://localhost:8080/basicauth'
//     ,{headers});
//     //console.log("Execute Hello World Bean Service")
//   }
  
  executeAuthenticationService(username, password){
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' +password)
    //return basicAuthHeaderString;

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })

    
    return this.http.get<AuthenticationBean>('http://localhost:8080/basicauth'
    ,{headers}).pipe(
        map(
            data=> {
                sessionStorage.setItem('authenticateuser',username);
                return data;
            }
        )
    );
    //console.log("Execute Hello World Bean Service")
  }

//   createBasicAuthenticationHttpHeader(){
//     let username = 'user'
//     let password = 'password'
//     let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' +password)
//     return basicAuthHeaderString;
//   }

}

export class AuthenticationBean{
    constructor(public message:string){}
}
