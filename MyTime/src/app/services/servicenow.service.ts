import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from '../../environment';
@Injectable({
  providedIn: 'root'
})
export class ServicenowService {
  constructor(private http: HttpClient) {
    // let headers: HttpHeaders; 

   }
   login(){
    
    this.http.get("https://dev255858.service-now.com/api/801107/auth?sysparm_email=admin@example.com",{
      headers: {
        "Accept": "application/json",
        "Content-Type": "application /json",
        'Authorization': 'Basic '+btoa(environment.username+':'+environment.password),
      }, withCredentials: true
    }).subscribe(res => {
      console.log(res);
    })
   }
}
