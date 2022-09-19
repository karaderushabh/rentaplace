import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpropertyComponent } from './addproperty/addproperty.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminlogoutComponent } from './adminlogout/adminlogout.component';
import { AdminauthGuardService } from './adminservice/adminauth-guard.service';
import { ChatownerComponent } from './chatowner/chatowner.component';
import { ChatuserComponent } from './chatuser/chatuser.component';
import { ListmypropertiesComponent } from './listmyproperties/listmyproperties.component';
import { LogoutComponent } from './logout/logout.component';
import { MyconfirmedpropComponent } from './myconfirmedprop/myconfirmedprop.component';
import { OwnerloginComponent } from './ownerlogin/ownerlogin.component';
import { OwnermailsComponent } from './ownermails/ownermails.component';
import { OwnerregistrationComponent } from './ownerregistration/ownerregistration.component';
import { PropertylistComponent } from './propertylist/propertylist.component';
import { AuthGuardService } from './service/auth-guard.service';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregistrationComponent } from './userregistration/userregistration.component';

const routes: Routes = [
  { path: 'login', component: UserloginComponent },
  { path: 'ownerlogin', component: OwnerloginComponent },
  { path: 'ownerregistration', component: OwnerregistrationComponent },
  { path: 'userregistration', component: UserregistrationComponent },

  {
    path: 'propertylist',
    component: PropertylistComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'myconfirmedprop',
    component: MyconfirmedpropComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'chatuser',
    component: ChatuserComponent,
    canActivate: [AuthGuardService],
  },

  {
    path: 'admindashboard',
    component: AdmindashboardComponent,
    canActivate: [AdminauthGuardService],
  },

  {
    path: 'chatowner',
    component: ChatownerComponent,
    canActivate: [AdminauthGuardService],
  },
  {
    path: 'listmyproperties',
    component: ListmypropertiesComponent,
    canActivate: [AdminauthGuardService],
  },
  {
    path: 'addproperty',
    component: AddpropertyComponent,
    canActivate: [AdminauthGuardService],
  },
  {
    path: 'ownermails',
    component: OwnermailsComponent,
    canActivate: [AdminauthGuardService],
  },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'ownerlogout',
    component: AdminlogoutComponent,
    canActivate: [AdminauthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
