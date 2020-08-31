import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListOfEmployersComponent } from './list-of-employers/list-of-employers.component';
import { FormforNewEmployerComponent } from './formfor-new-employer/formfor-new-employer.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { EmployerService } from './employer.service';
import { SeachDeleteComponent } from './seach-delete/seach-delete.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ListOfEmployersComponent,
    FormforNewEmployerComponent,
    HomeComponent,
    SeachDeleteComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [EmployerService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
