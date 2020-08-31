import { Component, OnInit } from '@angular/core';
import { EmployerService } from '../employer.service';

@Component({
  selector: 'app-seach-delete',
  templateUrl: './seach-delete.component.html',
  styleUrls: ['./seach-delete.component.css']
})
export class SeachDeleteComponent implements OnInit {

  Employers: any;
  id: any;
  

  constructor(private service:EmployerService) { }

public deleteEmployerById(id:number) {
  this.service.deleteEmployerById(id).subscribe((data)=>this.Employers=data);  
}

public searchEmployerById() {
  this.service.getEmployerById(this.id).subscribe((data)=>this.Employers=data); 
    
}

  ngOnInit() {
    this.service.getEmployersList().subscribe((data)=>this.Employers=data);
  }

}
