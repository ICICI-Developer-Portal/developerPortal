import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './LandingPage/layout/layout.component';
import { MailverifyComponent } from './mailverify/mailverify.component';
import { AuthGuard } from './services/auth.guard';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { AppathonComponent } from './appathon/appathon.component';

const routes: Routes = [
  // { path: '', redirectTo :'index', pathMatch :'full' },
  { path: 'layout', component: LayoutComponent, canActivate: [AuthGuard] },
  {
    path: 'dashboard',
    component: MailverifyComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin',
    component: AdminPortalComponent,
    // canActivate: [true],
    children: [
      {
        path: '',
        loadChildren: './adminpanel/adminpanel.module#AdminpanelModule',
      },
    ],
  },
  {
    path: 'appathon',
    component: AppathonComponent,
    children: [
      {
        path: '',
        loadChildren:
          './appathon-landing/appathon-landing.module#AppathonLandingModule',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
