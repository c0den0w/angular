import { Component, ViewContainerRef, ViewChild, NgModuleRef, OnInit } from '@angular/core';
import { SearchComponent } from '../widgets/search/search.component';

@Component({
  selector: 'app-workarea',
  standalone: true,
  imports: [SearchComponent],
  templateUrl: './workarea.component.html',
  styleUrl: './workarea.component.scss'
})
export class WorkareaComponent implements OnInit {
  ngOnInit(): void {
    
  }
  @ViewChild("vcr",{static: false, read: ViewContainerRef}) vcr!: ViewContainerRef;
  constructor(){}
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
  dragoverHandler(ev:any) {
    ev.preventDefault();
    console.log(ev);
    ev.dataTransfer.dropEffect = "move";
  }
  dropHandler(e: any) {
    e.preventDefault();
    const data = e.dataTransfer.getData("text/html");
  const newComp = this!.vcr.createComponent(SearchComponent,{index: 0});
    let element = document.createElement("div");
    element.id = ""
    element.classList.add("container-component");
    document.getElementById("paper")?.appendChild(element);

    // document.getElementById("paper")!.innerHTML += data;
  }
}
