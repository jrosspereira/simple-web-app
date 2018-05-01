import { Component, OnInit, Input } from '@angular/core';
import { UserProfile } from '../userProfile';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { UserProfileService }  from '../user-profile.service';

@Component({
  selector: 'app-user-profile-detail',
  templateUrl: './user-profile-detail.component.html',
  styleUrls: ['./user-profile-detail.component.css']
})
export class UserProfileDetailComponent implements OnInit {
  @Input() userProfile: UserProfile;

  constructor(
    private route: ActivatedRoute,
    private userProfileService: UserProfileService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getProfile();
  }

  getProfile(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.userProfileService.getProfile(id)
      .subscribe(userProfile => this.userProfile = userProfile);
  }

  goBack(): void {
    this.location.back();
  }
}
