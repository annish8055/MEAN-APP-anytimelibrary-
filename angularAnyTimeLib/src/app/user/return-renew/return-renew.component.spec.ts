import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnRenewComponent } from './return-renew.component';

describe('ReturnRenewComponent', () => {
  let component: ReturnRenewComponent;
  let fixture: ComponentFixture<ReturnRenewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnRenewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnRenewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
