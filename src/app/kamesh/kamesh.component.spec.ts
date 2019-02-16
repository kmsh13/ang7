import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KameshComponent } from './kamesh.component';

describe('KameshComponent', () => {
  let component: KameshComponent;
  let fixture: ComponentFixture<KameshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KameshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KameshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
