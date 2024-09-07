import { Component } from '@angular/core';
import { SearchWidgetsComponent } from './search-widgets/search-widgets.component';
import { GroupComponent } from './group/group.component';
@Component({
  selector: 'app-widgets',
  standalone: true,
  imports: [SearchWidgetsComponent, GroupComponent],
  templateUrl: './widgets.component.html',
  styleUrl: './widgets.component.scss'
})
export class WidgetsComponent {

}
