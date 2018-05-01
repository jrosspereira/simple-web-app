"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var Subject_1 = require('rxjs/Subject');
var operators_1 = require('rxjs/operators');
var UserProfileSearchComponent = (function () {
    function UserProfileSearchComponent(userProfileService) {
        this.userProfileService = userProfileService;
        this.searchTerms = new Subject_1.Subject();
    }
    // Push a search term into the observable stream.
    UserProfileSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    UserProfileSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userProfiles$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        operators_1.debounceTime(300), 
        // ignore new term if same as previous term
        operators_1.distinctUntilChanged(), 
        // switch to new search observable each time the term changes
        operators_1.switchMap(function (term) { return _this.userProfileService.searchUserProfiles(term); }));
    };
    UserProfileSearchComponent = __decorate([
        core_1.Component({
            selector: 'app-user-profile-search',
            templateUrl: './user-profile-search.component.html',
            styleUrls: ['./user-profile-search.component.css']
        })
    ], UserProfileSearchComponent);
    return UserProfileSearchComponent;
}());
exports.UserProfileSearchComponent = UserProfileSearchComponent;
//# sourceMappingURL=user-profile-search.component.js.map