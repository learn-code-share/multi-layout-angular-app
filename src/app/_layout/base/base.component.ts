import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styles: []
})
export class BaseComponent implements OnInit {

  appName: string;
  username: string;
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    authService.currentUser.subscribe(data => {
      this.username = data.name;
    });
  }

  ngOnInit(): void {
    this.appName = environment.appName;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['welcome']);
  }

}
