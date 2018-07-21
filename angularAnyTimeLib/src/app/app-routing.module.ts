import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './user/profile/profile.component';
import { HistoryComponent } from './user/history/history.component';
import { AdminComponent } from './admin/admin.component';
import { AddBookComponent } from './admin/add-book/add-book.component';
import { DeleteBookComponent } from './admin/delete-book/delete-book.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ReturnRenewComponent } from './user/return-renew/return-renew.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';
import { UserListComponent } from './admin/user-list/user-list.component';

const routes: Routes = [
  {path:"" , redirectTo: "signin"  , pathMatch: 'full'},
  {path:"", component:AppComponent},
  {path:"user", component:UserComponent, canActivate:[AuthGuard]},
  {path:"user/profile", component:ProfileComponent, canActivate:[AuthGuard]},
  {path:"user/history", component:HistoryComponent, canActivate:[AuthGuard]},
  {path:"user/returnRenew", component:ReturnRenewComponent, canActivate:[AuthGuard]},
  {path:"admin", component:AdminComponent, canActivate:[AuthGuard]},
  {path:"admin/addBook", component:AddBookComponent, canActivate:[AuthGuard]},
  {path:"admin/deletebook", component:DeleteBookComponent, canActivate:[AuthGuard]},
  {path:"admin/userList", component:UserListComponent, canActivate:[AuthGuard]},
  {path:"signin", component:SigninComponent},
  {path:"signup", component:SignupComponent},
  {path:"not-found", component:NotFoundComponent, canActivate:[AuthGuard]},
  {path:"**", redirectTo:"not-found"}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
