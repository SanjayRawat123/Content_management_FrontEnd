import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/service/categories.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {
   
contents=[
  {
   cId:'',
   title:'',
   description:' ',
  },
  


]

  constructor( private content:CategoriesService) { }

  ngOnInit(): void {

    this.content.contents().subscribe((data:any)=>{

        //
        this.contents=data;
        console.log(this.contents);

    },

    (error)=>{
      //
      console.log("error in view category");
     // Swal.fire("Error","Error in loading data",error);
     alert("error in loading data")

    }
      
      );
    }
    
  
  }


