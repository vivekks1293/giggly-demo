import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbComponentGiggly } from './breadcrumb.component';

describe('BreadcrumbComponent', () => {
  let component: BreadcrumbComponentGiggly;
  let fixture: ComponentFixture<BreadcrumbComponentGiggly>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BreadcrumbComponentGiggly]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreadcrumbComponentGiggly);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
