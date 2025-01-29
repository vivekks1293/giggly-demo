import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigglySidebarComponent } from './giggly-sidebar.component';

describe('GigglySidebarComponent', () => {
  let component: GigglySidebarComponent;
  let fixture: ComponentFixture<GigglySidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GigglySidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GigglySidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
