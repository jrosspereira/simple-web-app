import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilesComponent } from './profiles/profiles.component';
import { UserProfileDetailComponent }  from './user-profile-detail/user-profile-detail.component';

const routes: Routes = [
  { path: '', component: ProfilesComponent },
  { path: 'view/:id', component: UserProfileDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule { }
