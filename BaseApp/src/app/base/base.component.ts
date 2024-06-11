import { Component } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent {
  searchVal : string= '';
  childUrl:string = environment.Url;

  constructor() { }

  search(f:HTMLIFrameElement) {
    this.childUrl = environment.Url + '?search=' + this.searchVal;
    f.src = this.childUrl;
    console.log(this.childUrl , f.src);
  }
}
