import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaindashboardComponent } from './maindashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApplicationComponent } from './application/application.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { FaqComponent } from './faq/faq.component';
import { AuthGuard } from '../services/auth.guard';
import { OnboardingrequestsComponent } from './onboardingrequests/onboardingrequests.component';


const routes: Routes = [
    {
        path: '',
        component: MaindashboardComponent,
        children: [       
            { path: 'faq', component: FaqComponent },
        ]
    },
    { path: 'application', component: ApplicationComponent ,canActivate: [AuthGuard]},
    { path: 'analytics', component: AnalyticsComponent ,canActivate: [AuthGuard]},
    { path: 'userprofile', component: UserprofileComponent ,canActivate: [AuthGuard]},
    //{ path: 'supportticket', component: SupportticketComponent ,canActivate: [AuthGuard]},
    { path: 'onboardingrequests', component: OnboardingrequestsComponent ,canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MaindashboardRoutingModule {
}
