import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData={
   userName:'',
   password:'',


  }

  constructor(private snack:MatSnackBar, private login:LoginService,private router:Router) { }

  ngOnInit(): void {
  }


formSubmit(){
  //alert("login button click");

  if(this.loginData.userName==''||this.loginData.userName==null){
    this.snack.open("User name is required",'',{
      duration:3000,
      verticalPosition: 'top',
      horizontalPosition:'left'
     });
   return;
 }

 if(this.loginData.password==''||this.loginData.password==null){
  this.snack.open("User password is required",'',{
    duration:3000,
    verticalPosition: 'top',
    horizontalPosition:'left'
   });
 return;
}
//request to server to genetate token
this.login.generateToken(this.loginData).subscribe(

(data:any)=>{
  alert("success");
  console.log(data);

//login......

this.login.loginUser(data.token);

this.login.getCurrenUser().subscribe(
  (user:any)=>{

this.login.setUser(user);

alert( this.login.username());
console.log(user);
//redirect---Admin: admin-dashboard
//redirect...Normal:normal dashboard


if(this.login.userRole()=="Admin"){
//adim dasborad
window.location.href='/admin';
//this.router.navigate(['user-dashboard'])
//this.login.loginStatusSubject.next(true);

}else if(this.login.userRole()=="Normal"){
//NORMAL USER DASHBOARD

//window.location.href='/user-dashboard';

this.router.navigate(['user-dashboard'])
//this.login.loginStatusSubject.next(true);

}else{

  //this
this.login.logout();



}






});


},



  (error)=>{
    console.log("Error!");
    console.log(error);
    this.snack.open("Invalid Details,Try again",'',{
      duration:3000,
    })
    
  
  }
  
  
);

}


}
