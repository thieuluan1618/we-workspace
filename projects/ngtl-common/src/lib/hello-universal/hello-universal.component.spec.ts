import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloUniversalComponent } from './hello-universal.component';

describe('HelloUniversalComponent', () => {
  let component: HelloUniversalComponent;
  let fixture: ComponentFixture<HelloUniversalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloUniversalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelloUniversalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
