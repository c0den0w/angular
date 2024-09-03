import { Component } from '@angular/core';
import { WorkareaComponent } from './workarea/workarea.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { LayoutOptionsComponent } from './layout-options/layout-options.component';

@Component({
  selector: 'app-qpaper',
  standalone: true,
  imports: [WidgetsComponent, WorkareaComponent, LayoutOptionsComponent],
  templateUrl: './qpaper.component.html',
  styleUrl: './qpaper.component.scss'
})
export class QpaperComponent {

}
