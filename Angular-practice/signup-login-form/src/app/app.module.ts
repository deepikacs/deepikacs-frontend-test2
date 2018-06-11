import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { SimpleServiceService } from './simple-service.service';



const appRoutes: Routes = [
  { path: '', redirectTo: 'sign_up', pathMatch: 'full' },
  { path: 'sign_up', component: SignupComponent },
  { path: 'login', component:LoginComponent },
   ];
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    RouterModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule
  ],
  providers: [SimpleServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
