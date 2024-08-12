import { Component, OnInit } from '@angular/core';
import { ServicenowService } from '../services/servicenow.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  
  constructor(private servicenow: ServicenowService){ 
    this.servicenow.login();
  }
  
}
