import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QpaperComponent } from './qpaper/qpaper.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QpaperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'QPaper';
}
