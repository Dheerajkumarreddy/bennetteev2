import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployerService {

  constructor(private http: HttpClient) {  }

public login(username:string, password:string){
  const headers=new HttpHeaders({Authorization: 'Basic'+btoa(username+":"+password)})
return this.http.get("http://localhost:9998/",{headers,responseType: 'text' as 'json'});
}

getEmployersList(){
  return this.http.get("http://localhost:9998/findAll");
}

newEmployer(employer){
  return this.http.post("http://localhost:9998/addEmployer",employer, {responseType: 'text' as 'json'});
}

getEmployerById(id){
  return this.http.get("http://localhost:9998/findEmployerById/"+id);
}


deleteEmployerById(id){
  return this.http.delete("http://localhost:9998/deleteEmployerById/"+id)
}

}
