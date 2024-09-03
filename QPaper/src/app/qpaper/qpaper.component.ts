import { Component } from '@angular/core';
import { WorkareaComponent } from './workarea/workarea.component';
import { WidgetsComponent } from './widgets/widgets.component';

@Component({
  selector: 'app-qpaper',
  standalone: true,
  imports: [WidgetsComponent, WorkareaComponent],
  templateUrl: './qpaper.component.html',
  styleUrl: './qpaper.component.scss'
})
export class QpaperComponent {
  
}
