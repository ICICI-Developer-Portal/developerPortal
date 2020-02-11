import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { IndexComponent } from './index/index.component';
import { FaqComponent } from './faq/faq.component';
import { OnboardingrequestComponent } from './onboardingrequest/onboardingrequest.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { ResetComponent } from './reset_password/reset.component';
import { TermsandconditionComponent } from './termsandcondition/termsandcondition.component';
import { NDAComponent } from './nda/nda.component';
import { ContractComponent } from './contract/contract.component';
import { AuthGuard } from '../../services/auth.guard';
import { AppathonComponent } from '../../LandingPage/home/appathon/appathon.component';
import { AppathonAdComponent } from '../../LandingPage/home/appathon-ad/appathon-ad.component';
const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  {
    path: 'index',
    component: LayoutComponent,
    children: [
      { path: '', component: IndexComponent },
      { path: 'faq', component: FaqComponent },
      {
        path: 'userprofile',
        component: UserprofileComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'merchantOnboarding',
        component: OnboardingrequestComponent,
        canActivate: [AuthGuard],
      },
      //{ path: 'dashboard', component: DashboardComponent},
      { path: 'termsandcondition', component: TermsandconditionComponent },
      { path: 'nda', component: NDAComponent },
      { path: 'contract', component: ContractComponent },
      { path: 'appathon', component: AppathonComponent },
    ],
  },
  {
    path: '',
    component: LayoutComponent,
    children: [{ path: 'reset_password', component: ResetComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
