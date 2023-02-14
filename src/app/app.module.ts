import { NgModule,CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Routes,RouterModule} from '@angular/router';
//components
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
// 
import { FlexLayoutModule } from '@angular/flex-layout';
import {  ReactiveFormsModule,FormGroup,FormsModule } from '@angular/forms';
import { HttpClient,HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import {NgxPaginationModule} from 'ngx-pagination'
import {MatPaginatorModule} from '@angular/material/paginator';
import { ServiceService } from './services/service.service';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { CardComponentComponent } from './card-component/card-component.component';
import { ChooseSubjectComponent } from './choose-subject/choose-subject.component';
import { GreetingComponent } from './greeting/greeting.component';
const appRoutes : Routes = [
  {path:'',component: RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'resetPassword', component: ResetPasswordComponent},
  {path:'leaderBoard', component: LeaderboardComponent},
  {path:'quiz',component:CardComponentComponent},
  {path: 'choosesubject', component: ChooseSubjectComponent},
  {path:'greeting', component: GreetingComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    LeaderboardComponent,
    CardComponentComponent,
    ChooseSubjectComponent,
    GreetingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,  
    RouterModule,FlexLayoutModule,
    NgxPaginationModule,
    MatPaginatorModule,
  ],
  exports:[RouterModule,AngularMaterialModule
  ],
  providers: [HttpClient,ServiceService],
  bootstrap: [AppComponent],
  schemas: [],
})
export class AppModule { }
