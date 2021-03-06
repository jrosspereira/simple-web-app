"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var UserProfileDetailComponent = (function () {
    function UserProfileDetailComponent(route, userProfileService, location) {
        this.route = route;
        this.userProfileService = userProfileService;
        this.location = location;
    }
    UserProfileDetailComponent.prototype.ngOnInit = function () {
        this.getProfile();
    };
    UserProfileDetailComponent.prototype.getProfile = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.userProfileService.getProfile(id)
            .subscribe(function (userProfile) { return _this.userProfile = userProfile; });
    };
    UserProfileDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        core_1.Input()
    ], UserProfileDetailComponent.prototype, "userProfile");
    UserProfileDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-user-profile-detail',
            templateUrl: './user-profile-detail.component.html',
            styleUrls: ['./user-profile-detail.component.css']
        })
    ], UserProfileDetailComponent);
    return UserProfileDetailComponent;
}());
exports.UserProfileDetailComponent = UserProfileDetailComponent;
//# sourceMappingURL=user-profile-detail.component.js.map