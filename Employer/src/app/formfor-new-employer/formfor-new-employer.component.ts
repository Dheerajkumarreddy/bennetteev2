import { Component, OnInit } from '@angular/core';

import { EmployerService } from '../employer.service';
import { employer } from '../employer';

@Component({
  selector: 'app-formfor-new-employer',
  templateUrl: './formfor-new-employer.component.html',
  styleUrls: ['./formfor-new-employer.component.css']
})
export class FormforNewEmployerComponent implements OnInit {

  Employer: employer=new employer(0,"","","");
  message: any;

  constructor(private service:EmployerService) { }

  ngOnInit() {
  }


public NewEmployer() {
this.service.newEmployer(this.Employer).subscribe((data)=>this.message=data);
}

}
