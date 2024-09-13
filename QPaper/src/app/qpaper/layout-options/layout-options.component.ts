import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-layout-options',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './layout-options.component.html',
  styleUrl: './layout-options.component.scss'
})
export class LayoutOptionsComponent {
  showDropdown:boolean = false;
  dropdownTitle:string = "Page size";
  toggleDropdown(){
    this.showDropdown = !this.showDropdown;
  }
  selectpageSize(e: any){
    this.dropdownTitle = e.target.innerText;
    this.showDropdown = !this.showDropdown;
  }
}
