import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AddcontentService {

  constructor(private http:HttpClient,private login:LoginService) { }  

  baseUrl:String = "http://localhost:9999/contentManagement/v1/api"
  baseUrl1:String = "http://localhost:8092/user/v1"

 /**  addUser(userObject:any){
   return  this.http.post(this.baseUrl+"/register",userObject);
  }

  loginCheck(userobj:any){
    return this.http.post(this.baseUrl1+"/login",userobj);
  }

  getContent(){
    let httpHeaders=new HttpHeaders({
      'Authorization' : 'Bearer' +localStorage.getItem('jwt')
     });
  
     let requestToken={ headers : httpHeaders }
    return this.http.get(this.baseUrl+"/content/allContent/"+localStorage.getItem('emailId'),requestToken)
  }

  getSpecificContent(postId:any){
    let httpHeaders=new HttpHeaders({
      'Authorization' : 'Bearer' +localStorage.getItem('jwt')
     });
  
     let requestToken={ headers : httpHeaders }
    return this.http.get(this.baseUrl+"/content/contentByPost/"+localStorage.getItem('emailId')+"/"+postId,requestToken)
  }

  editPost(content:any){
    let httpHeaders=new HttpHeaders({
      'Authorization' : 'Bearer' +localStorage.getItem('jwt')
     });
  
     let requestToken={ headers : httpHeaders }
     ///content/updateContent/{email}
    return this.http.put(this.baseUrl+"/content/updateContent/"+localStorage.getItem('emailId'),content,requestToken)
  }

  deletePost(postId:any){
    let httpHeaders=new HttpHeaders({
      'Authorization' : 'Bearer' +localStorage.getItem('jwt')
     });
  
     let requestToken={headers : httpHeaders}
     ///content/delete/{postId}/{email}
    return this.http.delete(this.baseUrl+"/content/delete/"+postId+"/"+localStorage.getItem('emailId'),requestToken)
  }*/
 
 /**public postContent(content:any){
    let httpHeaders=new HttpHeaders({
      'Authorization' : 'Bearer' +localStorage.getItem('jwt')
    });
      console.log(content);
     let requestToken={headers : httpHeaders}

   /// JSON.parse(localStorage.getItem('user'));
     //content{username}
    return this.http.put("http://localhost:9999/contentManagement/v1/api/content/matadi",content);
  }
*/

  



}
