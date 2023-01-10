import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AddcontentService } from 'src/app/service/addcontent.service';
import { CategoriesService } from 'src/app/service/categories.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {

  constructor(private  contentService:AddcontentService,private snackbar:MatSnackBar,private route:Router,private login:LoginService) { }

  addContent:any = {



  };

  ngOnInit(): void {


  }


  //   console.log(noteForm.content)
  //   console.log(noteForm)
  //   console.log(noteForm.value)
  //   this.noteservices.postNote(noteForm).subscribe( card => {
  //     alert("New card Added");
  //     this.cardAdd = {}
  //   })
  //  }
 

  onSubmit(contentForm:any){
      let content:any = {
        postId: contentForm.postId,
        title: contentForm.title,
        content: contentForm.title,
        postedOn: contentForm.title,
        postedBy: contentForm.title
      }
  //console.log(contentForm.value);
 // console.log(content);
  //console.log(this.addContent)
      this.login.postContent(this.addContent).subscribe(
       ( data) => {


          console.log(data);
        }
      )
      this.snackbar.open('Note Added successfully', 'success', {​
             duration: 5000,​
             panelClass: ['mat-toolbar', 'mat-primary']​
             })

         //this.route.navigateByUrl("")
   }
}





