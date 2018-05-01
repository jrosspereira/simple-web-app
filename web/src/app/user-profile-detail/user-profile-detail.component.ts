import { Component, OnInit, Input } from '@angular/core';
import { UserProfile } from '../userProfile';

@Component({
  selector: 'app-user-profile-detail',
  templateUrl: './user-profile-detail.component.html',
  styleUrls: ['./user-profile-detail.component.css']
})
export class UserProfileDetailComponent implements OnInit {
  @Input() userProfile: UserProfile;

  constructor() { }

  ngOnInit() {
  }

}
