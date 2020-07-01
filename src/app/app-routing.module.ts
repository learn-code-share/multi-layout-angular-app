import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaseComponent } from './_layout/base/base.component';
import { NoAuthComponent } from './_layout/no-auth/no-auth.component';
import { HomeComponent } from './components/home/home.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { BenifitsComponent } from './components/common/benifits/benifits.component';
import { TermsComponent } from './components/common/terms/terms.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './helpers/auth.guard';


const routes: Routes = [
  // Authenticated Routes
  {
    path: '', component: BaseComponent, canActivate: [AuthGuard], children: [
      { path: '', component: HomeComponent }
    ]
  },

  // Guest Routes
  {
    path: '', component: NoAuthComponent, children: [
      { path: 'welcome', component: WelcomeComponent },
      { path: 'login', component: LoginComponent }
    ]
  },

  // Common routes for both authorize user and guest user
  { path: 'benifits', component: BenifitsComponent },
  { path: 'terms', component: TermsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
