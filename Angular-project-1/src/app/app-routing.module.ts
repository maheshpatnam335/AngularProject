import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';

const routes:Routes=[
  {path:"about-us", component:AboutUsComponent},
  {path:"how-it-works", component:HowItWorksComponent},
  
];
@NgModule({
 
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule
  ],
  exports:[RouterModule],
})
export class AppRoutingModule { }
