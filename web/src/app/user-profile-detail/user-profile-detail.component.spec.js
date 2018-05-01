"use strict";
var testing_1 = require('@angular/core/testing');
var user_profile_detail_component_1 = require('./user-profile-detail.component');
describe('UserProfileDetailComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [user_profile_detail_component_1.UserProfileDetailComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(user_profile_detail_component_1.UserProfileDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=user-profile-detail.component.spec.js.map