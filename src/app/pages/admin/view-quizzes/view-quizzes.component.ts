import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/service/categories.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {


  constructor( private content:CategoriesService ,private snackbar:MatSnackBar,private route:Router) { }
  ngOnInit(): void {
  }


  addContent:any = {

     postId: '',

     title:'',

     content:'',

     postedOn:'',

     postedBy:''


  };


  onSubmit(contentForm:any){
  
    this.content.postContent(this.addContent).subscribe(
      data => {
        console.log(data);
      }
    )
    this.snackbar.open('Note Added successfully', 'success', {​
           duration: 5000,​
           panelClass: ['mat-toolbar', 'mat-primary']​
           })

      // this.route.navigateByUrl("dashBoard")
 }
}





