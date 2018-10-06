import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterNewUserComponent } from './register-new-user/register-new-user.component';
import { LoginComponent } from './login/login.component';
import { UserBackendService } from '../services/user-backend.service';
import { SignupComponent } from './signup/signup.component';
import { MeetingComponent } from './meeting/meeting.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home',      component: HomeComponent},
  {
    path: 'signUp',
    component: SignupComponent
  }, {
    path: 'meeting',
    component: MeetingComponent
  }
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterNewUserComponent,
    LoginComponent,
    SignupComponent,
    MeetingComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {
      enableTracing: false
    })
  ],
  providers: [UserBackendService],
  bootstrap: [AppComponent]
})


export class AppModule { }
