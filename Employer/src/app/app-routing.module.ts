import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListOfEmployersComponent } from './list-of-employers/list-of-employers.component';
import { FormforNewEmployerComponent } from './formfor-new-employer/formfor-new-employer.component';
import { SeachDeleteComponent } from './seach-delete/seach-delete.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:"",redirectTo:"/login",pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:"home",component: HomeComponent},
  {path:"ListOfEmployers", component:ListOfEmployersComponent},
  {path:"FormForNewEmployer",component:FormforNewEmployerComponent},
  {path: "SeachDeleteComponent", component: SeachDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
