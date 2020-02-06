import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { ToasterModule } from 'angular2-toaster';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { ModalModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ModalModule.forRoot(),
    ToasterModule.forRoot(),
    BrowserAnimationsModule,
    Ng4LoadingSpinnerModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [LayoutComponent, FooterComponent, HeaderComponent],
})
export class LayoutModule {}
