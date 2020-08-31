import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployerService } from '../employer.service';

@Component({
  selector: 'app-list-of-employers',
  templateUrl: './list-of-employers.component.html',
  styleUrls: ['./list-of-employers.component.css']
})
export class ListOfEmployersComponent implements OnInit {

  Employers: any;

  constructor(private service: EmployerService) { }

  ngOnInit() {
  this.Employers=this.service.getEmployersList().subscribe((data) => this.Employers= data);
}

}
