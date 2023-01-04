import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';


import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignComponent } from './pages/sign/sign.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './service/admin.guard';
import { NormalGuard } from './service/normal.guard';



const routes: Routes = [

 





  {path:'',component:HomeComponent , pathMatch:'full'},

  {path:"signupview",component:SignComponent},

{path:"login",component:LoginComponent},

{path:"admin",
component:DashboardComponent,

canActivate:[AdminGuard],
children:[
  {
    path:'',
    component:WelcomeComponent,
  },
  {
    path:'Profile',
    component:ProfileComponent,
  },
  {
    path:"categories",
    component:ViewCategoriesComponent
  },
  {
    path:"add-category",
    component:AddCategoryComponent
  },
  {
    path:"view-quizzes",
    component:ViewQuizzesComponent
  }
 
]

},

{path:"user-dashboard",
component:UserDashboardComponent,
pathMatch:'full',
canActivate:[NormalGuard],
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
