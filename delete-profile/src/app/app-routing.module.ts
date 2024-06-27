import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentsComponent } from './departments/departments.component';
import { HomeComponent } from './home/home.component';
import { ManageComponent } from './manage/manage.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "search", component: SearchComponent },
  { path: "manage", component: ManageComponent },
  { path: "signin", component: SignInComponent },
  { path: "profile", component: ProfileComponent },
  { path: "departments", component: DepartmentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }