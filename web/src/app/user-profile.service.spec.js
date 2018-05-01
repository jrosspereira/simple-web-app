"use strict";
var testing_1 = require('@angular/core/testing');
var user_profile_service_1 = require('./user-profile.service');
describe('UserProfileService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [user_profile_service_1.UserProfileService]
        });
    });
    it('should be created', testing_1.inject([user_profile_service_1.UserProfileService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=user-profile.service.spec.js.map