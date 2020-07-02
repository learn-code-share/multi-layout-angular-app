import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-base-layout',
  template: `
    <app-base *ngIf="isAuthenticated"></app-base>
    <app-no-auth *ngIf="!isAuthenticated"></app-no-auth>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class BaseLayoutComponent {

  isAuthenticated = false;

  constructor(
    private authService: AuthService,
  ) {
    authService.currentUser.subscribe(data => {
      if (data !== null && data !== undefined) {
        this.isAuthenticated = true;
      } else {
        this.isAuthenticated = false;
      }
    });
  }
}
