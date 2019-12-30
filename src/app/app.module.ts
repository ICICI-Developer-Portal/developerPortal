import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LayoutModule } from "./LandingPage/layout/layout.module";
import { HomeModule } from "./LandingPage/home/home.module";
import { HttpModule } from "@angular/http";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { UserservicesModule } from "./services/userservice.module";
import { LoginService } from "./services";
import { Config } from "./config/config";
import { MaindashboardModule } from "./maindashboard/maindashboard.module";
import { MailverifyModule } from "./mailverify/mailverify.module";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { DocumentationDashbComponent } from "./documentation-dashb/documentation-dashb.component";
import { DocumentationDashbModule } from "./documentation-dashb/documentation-dashb.module";
import { VariablesService } from "./services/Variables.service";
import { AdminpanelModule } from "./adminpanel/adminpanel.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HomeModule,
    MaindashboardModule,
    AdminpanelModule,
    DocumentationDashbModule,
    HttpClientModule,
    HttpModule,
    UserservicesModule,
    MailverifyModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    Config,
    LoginService,
    VariablesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
