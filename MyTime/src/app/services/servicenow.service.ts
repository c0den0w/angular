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
    this.http.get("https://dev255858.service-now.com/api/now/table/sys_user?sysparm_query=email%3Dadela.cervantsz%40example.com&sysparm_limit=1",{
      headers: {
        "Accept": "application/json",
        "Content-Type": "application /json",
        'Authorization': 'Basic '+btoa(environment.username+':'+environment.password)
      }
    }).subscribe(res => {
      console.log(res);
    })
   }
}
