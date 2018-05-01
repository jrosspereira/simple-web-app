"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ProfilesComponent = (function () {
    function ProfilesComponent(userProfileService) {
        this.userProfileService = userProfileService;
    }
    ProfilesComponent.prototype.ngOnInit = function () {
        this.getProfiles();
    };
    ProfilesComponent.prototype.getProfiles = function () {
        var _this = this;
        this.userProfileService
            .getUserProfiles()
            .subscribe(function (userProfiles) { return _this.userProfiles = userProfiles; });
    };
    ProfilesComponent.prototype.onSelect = function (userProfile) {
        this.selectedUserProfile = userProfile;
    };
    ProfilesComponent = __decorate([
        core_1.Component({
            selector: 'app-profiles',
            templateUrl: './profiles.component.html',
            styleUrls: ['./profiles.component.css']
        })
    ], ProfilesComponent);
    return ProfilesComponent;
}());
exports.ProfilesComponent = ProfilesComponent;
//# sourceMappingURL=profiles.component.js.map