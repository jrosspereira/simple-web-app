import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { FormsModule } from '@angular/forms';
import { UserProfileDetailComponent } from './user-profile-detail/user-profile-detail.component';

import { UserProfileService } from './user-profile.service';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UserProfileSearchComponent } from './user-profile-search/user-profile-search.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfilesComponent,
    UserProfileDetailComponent,
    UserProfileSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    UserProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
