import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

  activeTab:any="Experience";

  onTabs(tab:any){
    this.activeTab=tab;
  }
  
}
