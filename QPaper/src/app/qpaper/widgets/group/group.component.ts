import { Component } from '@angular/core';
import { ComponentsComponent } from './components/components.component';
@Component({
  selector: 'app-group',
  standalone: true,
  imports: [ComponentsComponent],
  templateUrl: './group.component.html',
  styleUrl: './group.component.scss'
})
export class GroupComponent {

}
