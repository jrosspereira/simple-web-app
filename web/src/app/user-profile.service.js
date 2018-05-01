"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var of_1 = require('rxjs/observable/of');
var operators_1 = require('rxjs/operators');
var UserProfileService = (function () {
    function UserProfileService(http) {
        this.http = http;
        this.profilesUrl = 'http://localhost:8080/api/profile'; // URL to web api
    }
    UserProfileService.prototype.getUserProfiles = function () {
        return this.http.get(this.profilesUrl)
            .pipe(operators_1.tap(function (userProfiles) { return console.log('fetched userProfiles'); }));
    };
    UserProfileService.prototype.getProfile = function (id) {
        var url = this.profilesUrl + '/' + id;
        return this.http.get(url)
            .pipe(operators_1.tap(function (_) { return console.log('fetched profile id=' + id); }));
    };
    /* GET user whose name contains search term */
    UserProfileService.prototype.searchUserProfiles = function (term) {
        if (!term.trim()) {
            // if not search term, return empty array.
            return of_1.of([]);
        }
        var url = this.profilesUrl + '/search?term=' + term;
        return this.http.get(url)
            .pipe(operators_1.tap(function (_) { return console.log('found heroes matching' + term); }));
    };
    UserProfileService = __decorate([
        core_1.Injectable()
    ], UserProfileService);
    return UserProfileService;
}());
exports.UserProfileService = UserProfileService;
//# sourceMappingURL=user-profile.service.js.map