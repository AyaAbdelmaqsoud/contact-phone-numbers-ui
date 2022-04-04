import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import {MatTableModule} from '@angular/material/table';
import {AppConfigService} from './services/app-config.service'
import {PhoneApi} from './interface/contact-phone-number/api/PhoneApi'
import { ContactPhoneNumberService } from './services/contactPhoneNumber-service';
import { ContactPhoneNumberComponent } from './contactPhoneNumber/contactPhoneNumber.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginator} from '@angular/material/paginator';
import { MatPaginatorModule } from '@angular/material/paginator';

import { MatSelectModule } from '@angular/material/select'
const appInitializerFn = (appConfig: AppConfigService) => {
  return () => {
      return appConfig.loadAppConfig();
  }
};

@NgModule({
  declarations: [
    AppComponent,
    ContactPhoneNumberComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatSelectModule,MatPaginatorModule
  ],
  providers: [ContactPhoneNumberService,PhoneApi,AppConfigService,
    {
        provide: APP_INITIALIZER,
        useFactory: appInitializerFn,
        multi: true,
        deps: [AppConfigService]
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
