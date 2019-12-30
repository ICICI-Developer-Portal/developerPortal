import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './LandingPage/layout/layout.component';
import { MailverifyComponent } from './mailverify/mailverify.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  // { path: '', redirectTo :'index', pathMatch :'full' },  
  { path: 'layout', component: LayoutComponent,canActivate: [AuthGuard]},
  { path: 'dashboard', component: MailverifyComponent,canActivate: [AuthGuard]},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
