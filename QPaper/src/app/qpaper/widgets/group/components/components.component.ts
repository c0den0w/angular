import { Component } from '@angular/core';

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [],
  templateUrl: './components.component.html',
  styleUrl: './components.component.scss'
})
export class ComponentsComponent {
  containerMarkup:string = `<div class="container-component"></div>`;


  draghandler(e:any){
    let containerMarkup = document.createElement("div");
    containerMarkup.classList.add("container-component");
    containerMarkup.contentEditable = "true";
    e.dataTransfer.setData("text/html", containerMarkup);
    e.dataTransfer.dropEffect = "copy";
  }

}
