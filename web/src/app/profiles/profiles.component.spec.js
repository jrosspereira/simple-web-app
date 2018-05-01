"use strict";
var testing_1 = require('@angular/core/testing');
var profiles_component_1 = require('./profiles.component');
describe('ProfilesComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [profiles_component_1.ProfilesComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(profiles_component_1.ProfilesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=profiles.component.spec.js.map