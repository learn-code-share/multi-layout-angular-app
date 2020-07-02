import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponent } from './_layout/base/base.component';
import { NoAuthComponent } from './_layout/no-auth/no-auth.component';
import { BenefitsComponent } from './components/common/benefits/benefits.component';
import { TermsComponent } from './components/common/terms/terms.component';
import { HomeComponent } from './components/home/home.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginComponent } from './components/login/login.component';
import { BaseLayoutComponent } from './_layout/base-layout/base-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    NoAuthComponent,
    BenefitsComponent,
    TermsComponent,
    HomeComponent,
    WelcomeComponent,
    LoginComponent,
    BaseLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
