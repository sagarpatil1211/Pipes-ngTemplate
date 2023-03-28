import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-templates',
  templateUrl: './ng-templates.component.html',
  styleUrls: ['./ng-templates.component.css']
})
export class NgTemplatesComponent {

  show = true;
  changeValue(){
    this.show = !this.show
  }
}
