import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { LoginService } from 'src/app/service/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {


  content:any={
    
   title:'',
   content:' ',
   postedOn:'',
   postedBy:''

  }

  constructor(private _content:LoginService,private snack:MatSnackBar,private activatedRoute: ActivatedRoute) { }

  postId=0

  ngOnInit(): void {

   this.postId =this.activatedRoute.snapshot.params['postId'];


   this._content.getSpecificContent(this.postId).subscribe(data => {
    console.log(data);
    this.content = data;
  })

  // alert(this.postId);
  }
  formSubmit(){
    if(this.content.title.trim()==''|| this.content.title==null){
      this.snack.open("title name is required",'',{
        duration:3000,
        verticalPosition: 'top',
        horizontalPosition:'left'
       });
        return;
    }

    this._content.editPost(this.content).subscribe(
     
(data:any): void=>{
  Swal.fire('Success!!','content is Updated successfuly','success');
},

(error)=>{

console.log("error");

  Swal.fire('error!!','content is  not updated  ','error');



}

    );
  }

}
