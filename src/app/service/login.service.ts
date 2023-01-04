import { UniqueSelectionDispatcher } from '@angular/cdk/collections';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

public loginStatusSubject =new Subject<boolean>();



  constructor(private http:HttpClient){}


/**   getcurrenUser() {
    throw new Error('Method not implemented.');
  }
  getUserRole() {
    throw new Error('Method not implemented.');
  }*/
  baseUrl:String = "http://localhost:9999/contentManagement/v1/api"
 


//Cureent User Detailes which is login
public getCurrenUser(){
return this.http.get("http://localhost:8080/current-user");

}
  //generate token
  public generateToken(loginData:any){
    
    return this.http.post("http://localhost:8080/generate-token",loginData);

  }

  //login user:set token in localstorage

  public loginUser(token:any)
  {
    localStorage.setItem('token',token);
    //this.loginStatusSubject.next(true)
    return true;

  }
  //is login
  public isLoggedIn()
{
   let tokenStr=localStorage.getItem("token")
   if(tokenStr==undefined|| tokenStr == ''||tokenStr==null){

    return false;
   }else{
    return true
   }
    
}
//logout:remove token from local storage

public logout()

{
  localStorage.removeItem("token")
  localStorage.removeItem('user')
  return true;
}

//get token 


public getToken(){
  return localStorage.getItem("token")
}

//set user detailes 

public setUser(user:any){
  localStorage.setItem("user",JSON.stringify(user));
}

//ger user 
public getUser(){

let userStr= localStorage.getItem("user");
if (userStr!=null){

  return JSON.parse(userStr);
}else{
  this.logout();
  return null;
}
}
//get role //skiping

public userRole(){
  let user =this.getUser()
  return user.authorities[0].authority;
}

//get username

public username(){
  let userStr = this.getUser()
       
return userStr.userName;

}







}
