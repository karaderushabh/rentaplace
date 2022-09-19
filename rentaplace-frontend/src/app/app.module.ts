import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { PropertylistComponent } from './propertylist/propertylist.component';
import { LogoutComponent } from './logout/logout.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UserregistrationComponent } from './userregistration/userregistration.component';
import { OwnerloginComponent } from './ownerlogin/ownerlogin.component';
import { OwnerregistrationComponent } from './ownerregistration/ownerregistration.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminlogoutComponent } from './adminlogout/adminlogout.component';
import { OwnermailsComponent } from './ownermails/ownermails.component';
import { AddpropertyComponent } from './addproperty/addproperty.component';
import { ListmypropertiesComponent } from './listmyproperties/listmyproperties.component';
import { MyconfirmedpropComponent } from './myconfirmedprop/myconfirmedprop.component';
import { ChatownerComponent } from './chatowner/chatowner.component';
import { ChatuserComponent } from './chatuser/chatuser.component';
@NgModule({
  declarations: [
    AppComponent,
    UserloginComponent,
    PropertylistComponent,
    LogoutComponent,
    HeaderComponent,
    UserregistrationComponent,
    OwnerloginComponent,
    OwnerregistrationComponent,
    AdmindashboardComponent,
    AdminlogoutComponent,
    OwnermailsComponent,
    AddpropertyComponent,
    ListmypropertiesComponent,
    MyconfirmedpropComponent,
    ChatownerComponent,
    ChatuserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
