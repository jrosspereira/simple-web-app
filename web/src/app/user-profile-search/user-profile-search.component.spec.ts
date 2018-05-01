import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileSearchComponent } from './user-profile-search.component';

describe('UserProfileSearchComponent', () => {
  let component: UserProfileSearchComponent;
  let fixture: ComponentFixture<UserProfileSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
