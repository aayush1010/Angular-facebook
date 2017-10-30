import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { WorldPicComponent } from './world-pic/world-pic.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginFormComponent,
    WorldPicComponent,
    SignupFormComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
