import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DispositivoComponent } from './dispositivo.component';

describe('DispositivoComponent', () => {
  let component: DispositivoComponent;
  let fixture: ComponentFixture<DispositivoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DispositivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispositivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
