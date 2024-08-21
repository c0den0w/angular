import { Component } from '@angular/core';
import { PendingActionsComponent } from './pending-actions/pending-actions.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PendingActionsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
