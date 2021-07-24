import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PortalModule } from '@angular/cdk/portal';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { PopoutService } from './services/popout.service';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './user/user.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    PortalModule,
    AppRoutingModule
  ],
  exports: [CustomerComponent],
  entryComponents: [CustomerComponent],
  declarations: [AppComponent, CustomerComponent, HeaderComponent, AboutComponent, UserComponent],
  providers: [
    PopoutService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {}
