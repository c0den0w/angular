import { Component } from '@angular/core';

@Component({
  selector: 'app-workarea',
  standalone: true,
  imports: [],
  templateUrl: './workarea.component.html',
  styleUrl: './workarea.component.scss'
})
export class WorkareaComponent {
  pageScaleFactor: number = 5;
  zoomin(e: any){
    console.log(e.wheelDelta);
    if(e.wheelDelta < 0){
      document.getElementById("paper")!.style.width = `calc((${this.pageScaleFactor} + ${this.pageScaleFactor} * 0.01) * 210px)`;
      document.getElementById("paper")!.style.height = `calc((${this.pageScaleFactor} - ${this.pageScaleFactor} * 0.01) * 297px)`;

      this.pageScaleFactor = this.pageScaleFactor + this.pageScaleFactor * 0.01;
    }
    if(e.wheelDelta > 0){
      document.getElementById("paper")!.style.width = `calc((${this.pageScaleFactor} - ${this.pageScaleFactor} * 0.01) * 210px)`;
      document.getElementById("paper")!.style.height = `calc((${this.pageScaleFactor} - ${this.pageScaleFactor} * 0.01) * 297px)`;

      this.pageScaleFactor = this.pageScaleFactor - this.pageScaleFactor * 0.01;
    }
  }
}
