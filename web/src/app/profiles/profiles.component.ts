import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../userProfile';
import { UserProfileService } from '../user-profile.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {
  userProfiles : UserProfile[];
  selectedUserProfile: UserProfile;

  constructor(private userProfileService: UserProfileService) {
  }

  ngOnInit() {
    this.getProfiles();
  }

  getProfiles() : void{
    this.userProfileService
          .getUserProfiles()
          .subscribe(userProfiles => this.userProfiles = userProfiles);

  }

  onSelect(userProfile: UserProfile): void {
    this.selectedUserProfile = userProfile;
  }

}
