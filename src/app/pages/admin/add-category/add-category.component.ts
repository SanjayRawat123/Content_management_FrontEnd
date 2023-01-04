import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoriesService } from 'src/app/service/categories.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {


  content:any={
    title:'',
    description:'',

  }

  constructor(private _content:CategoriesService,private snack:MatSnackBar) { }

  ngOnInit(): void {
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

    this._content.addContent(this.content).subscribe(
     
(data:any): void=>{
  Swal.fire('Success!!','content is add successfuly','success');
},

(error)=>{

console.log("error");

  Swal.fire('error!!','content is  not add successfuly','error');



}

    );
  }

}
