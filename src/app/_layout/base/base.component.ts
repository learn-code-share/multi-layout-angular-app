import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styles: []
})
export class BaseComponent implements OnInit {

  appName: string;
  constructor() { }

  ngOnInit(): void {
    this.appName = environment.appName;
  }

}
