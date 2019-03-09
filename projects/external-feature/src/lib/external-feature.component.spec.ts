import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalFeatureComponent } from './external-feature.component';

describe('ExternalFeatureComponent', () => {
  let component: ExternalFeatureComponent;
  let fixture: ComponentFixture<ExternalFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
