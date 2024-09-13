import { Component } from '@angular/core';
import { GroupComponent } from './group/group.component';
import { SearchComponent } from './search/search.component';
@Component({
  selector: 'app-widgets',
  standalone: true,
  imports: [ GroupComponent, SearchComponent],
  templateUrl: './widgets.component.html',
  styleUrl: './widgets.component.scss'
})
export class WidgetsComponent {

}
