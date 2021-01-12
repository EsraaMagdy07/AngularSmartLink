import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartLinkComponent } from './smart-link.component';
import '../../../../../myNewApp/src/audio.js';
describe('SmartLinkComponent', () => {
  let component: SmartLinkComponent;
  let fixture: ComponentFixture<SmartLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
