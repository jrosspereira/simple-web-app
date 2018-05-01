import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { FormsModule } from '@angular/forms';
import { UserProfileDetailComponent } from './user-profile-detail/user-profile-detail.component';

import { UserProfileService } from './user-profile.service';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ProfilesComponent,
    UserProfileDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    UserProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
