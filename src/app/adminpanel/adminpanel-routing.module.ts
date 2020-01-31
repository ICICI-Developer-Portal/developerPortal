import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../services/auth.guard';
import { AdminpanelComponent } from './adminpanel.component';
import { RequestsComponent } from './requests/requests.component';
import { ApprovalComponent } from './approval/approval.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PendingRegComponent } from './pending-reg/pending-reg.component';

const routes: Routes = [
  {
    //    path: 'request', component: RequestsComponent
    path: '',
    component: AdminpanelComponent,
    children: [
      { path: 'request', component: RequestsComponent },
      { path: 'approval', component: ApprovalComponent },
      { path: 'pendingreg', component: PendingRegComponent },
    ],
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent },

  //{ path: '**', redirectTo :'admin/login'},
  // { path: 'analytics', component: AnalyticsComponent ,canActivate: [AuthGuard]},
  // { path: 'userprofile', component: UserprofileComponent ,canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminpanelRoutingModule {}
