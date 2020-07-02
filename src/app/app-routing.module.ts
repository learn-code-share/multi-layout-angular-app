import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaseComponent } from './_layout/base/base.component';
import { NoAuthComponent } from './_layout/no-auth/no-auth.component';
import { HomeComponent } from './components/home/home.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { BenefitsComponent } from './components/common/benefits/benefits.component';
import { TermsComponent } from './components/common/terms/terms.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './helpers/auth.guard';
import { BaseLayoutComponent } from './_layout/base-layout/base-layout.component';


const routes: Routes = [
  {
    path: '', component: BaseLayoutComponent, children: [
      // Authenticated Routes
      { path: '', component: HomeComponent },

      // Guest Routes
      { path: 'welcome', component: WelcomeComponent },
      { path: 'login', component: LoginComponent },

      // Common routes for both authorize user and guest user
      { path: 'benefits', component: BenefitsComponent },
      { path: 'terms', component: TermsComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
