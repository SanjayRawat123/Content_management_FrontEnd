import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  constructor(private userservice:UserService, private snack:MatSnackBar) { }

  public user ={
    username:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:''

  }



  ngOnInit(): void {
  }
  signForm=new FormGroup({
    username:new FormControl('', [Validators.required,Validators.pattern("^[a-zA-Z0-9]+$")]),
    password:new FormControl('', [Validators.required,Validators.maxLength(6)]),
    lastName: new FormControl('', [Validators.required,Validators.pattern("[A-Za-z]+")]),
    firstName:new FormControl('', [Validators.required,Validators.pattern("[A-Za-z]+")]),
    email :new FormControl('', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    phone:new FormControl('', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),


})


signUser(){
console.warn(this.signForm.value)
}

get username(){
return this.signForm.get('username');
}

get password(){
return this .signForm.get('password');
}


get firstName(){
return this.signForm.get('firstName');
}

get lastName(){
return this.signForm.get('lastName');
}

get email(){
return this.signForm.get('email');
}

get phone(){
return this.signForm.get('phone')
}



  formSubmit(){

 console.log(this.user)
 if(this.user.username==''||this.user.username==null){
 // alert('user is required!!');
 this.snack.open("User name is required",'',{
  duration:3000,
  verticalPosition: 'top',
  horizontalPosition:'left'
 });
 return;
  

 }

 
 //adduser :userservice
 this.userservice.addUser(this.user).subscribe(
  (data: any)=>{
    //success
    console.log(data)
    Swal.fire({
      title: 'Success',
      text: 'You Are Registered',
      icon: 'success',
      confirmButtonText: 'Cool'
    })
 
  },
  (error: any)=>{
    //failer
    Swal.fire({
      title: 'Error',
      text: 'You Are not Registered',
      icon: 'error',
      confirmButtonText: 'Ok'
    })
  }
 )

  }


}
