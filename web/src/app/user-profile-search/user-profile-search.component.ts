import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { UserProfile } from '../userProfile';
import { UserProfileService } from '../user-profile.service';

@Component({
  selector: 'app-user-profile-search',
  templateUrl: './user-profile-search.component.html',
  styleUrls: ['./user-profile-search.component.css']
})
export class UserProfileSearchComponent implements OnInit {
  userProfiles$: Observable<UserProfile[]>;
  private searchTerms = new Subject<string>();

  constructor(private userProfileService: UserProfileService) { }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() : void {
    this.userProfiles$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.userProfileService.searchUserProfiles(term))
    );
  }

}
