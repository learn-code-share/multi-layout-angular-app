import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-no-auth',
  templateUrl: './no-auth.component.html',
  styles: []
})
export class NoAuthComponent implements OnInit {

  appName: string;
  constructor() { }

  ngOnInit(): void {
    this.appName = environment.appName;
  }

}
