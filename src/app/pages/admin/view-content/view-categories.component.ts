import { Component, OnInit } from '@angular/core';
//import { CategoriesService } from 'src/app/service/categories.service';
import { LoginService } from 'src/app/service/login.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {
   
contents:any=[
  {
   postId:'',
   title:'',
   content:' ',
   postedOn:'',
   postedBy:''
  },
  


]

  constructor( private content:LoginService) { }

  ngOnInit(): void {

    this.content.contents().subscribe((data:any)=>{

        //
        this.contents=data;
        console.log(this.contents);

    },

    (error)=>{
      //
      console.log("error in view category");
   
     alert("error in loading data")

    }
      
      );
    }
    
    //delete function
    deleteContent(postId:any){

  //  alert(postId);

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        this.content.deletePost(postId).subscribe(data=>{

          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )

        });
        
        
      }
    })
     
  }

}