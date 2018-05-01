import { Injectable } from '@angular/core';
import { UserProfile } from './userProfile';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserProfileService {

  private profilesUrl = 'http://localhost:8080/api/profile';  // URL to web api

  constructor(
    private http: HttpClient
  ) { }

  getUserProfiles(): Observable<UserProfile[]> {
    return this.http.get<UserProfile[]>(this.profilesUrl)
            .pipe(
                tap(userProfiles => console.log('fetched userProfiles'))
            );
  }

  getProfile(id: string): Observable<UserProfile> {
    const url = this.profilesUrl + '/' + id;
    return this.http.get<UserProfile>(url)
            .pipe(
              tap(_ => console.log('fetched profile id=' + id))
            );
  }

  /* GET user whose name contains search term */
  searchUserProfiles(term: string): Observable<UserProfile[]> {
    if (!term.trim()) {
      // if not search term, return empty array.
      return of([]);
    }

    const url = this.profilesUrl + '/search?term=' + term;
    return this.http.get<UserProfile[]>(url)
      .pipe(
        tap(_ => console.log('found heroes matching' + term))
      );
  }
}
