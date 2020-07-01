import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styles: []
})
export class WelcomeComponent implements OnInit {

  appName: string;
  constructor() { }

  ngOnInit(): void {
    this.appName = environment.appName;
  }

}
