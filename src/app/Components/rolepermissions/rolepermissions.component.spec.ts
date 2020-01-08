import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolepermissionsComponent } from './rolepermissions.component';

describe('RolepermissionsComponent', () => {
  let component: RolepermissionsComponent;
  let fixture: ComponentFixture<RolepermissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolepermissionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolepermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
