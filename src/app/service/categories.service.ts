import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http:HttpClient,private login:LoginService) { }
  
  baseUrl:String = "http://localhost:9999/contentManagement/v1/api"

  
  //Load all The content

  // public contents(){
  //   return this.http.get("http://localhost:9998/content/contents")
  // }
  //Add new  content
  public addContent(content:any){
    
 return this.http.post("http://localhost:9998/content/",content);

}

//get username from localstorage






//Add content for login user

}

