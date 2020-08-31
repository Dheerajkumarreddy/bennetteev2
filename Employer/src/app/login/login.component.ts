import { Component, OnInit } from '@angular/core';
import { EmployerService } from '../employer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username:string;
password:string;
message:any;

  constructor(private service: EmployerService, private router:Router) { }

  ngOnInit(): void {
  }

  doLogin(){
    let resp=this.service.login(this.username,this.password);
    resp.subscribe((data)=>{
      this.router.navigate["/home"]
    });
  }

}
