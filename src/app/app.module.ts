import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent} from './user/user.component';
import { RegistrationComponent} from './user/registration/registration.component'



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
