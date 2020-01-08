import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './Components/users/users.component';
import { ClientsComponent } from './Components/clients/clients.component';
import { PermissionsComponent } from './Components/permissions/permissions.component';
import { ClientUserComponent } from './Components/clientuser/clientuser.component';
import { UserRoleComponent } from './Components/userrole/userrole.component';
import { RolePermissionsComponent } from './Components/rolepermissions/rolepermissions.component';
import { LoginComponent } from './Components/login/login.component';


const routes: Routes = [
  {path:'users',component:UsersComponent},
  {path:'clients',component:ClientsComponent},
  {path:'roles',component:UsersComponent},
  {path:'permissions',component:PermissionsComponent},
  {path:'client_users',component:ClientUserComponent},
  {path:'user_roles',component:UserRoleComponent},
  {path:'role_permissions',component:RolePermissionsComponent},
  {path:'login',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
