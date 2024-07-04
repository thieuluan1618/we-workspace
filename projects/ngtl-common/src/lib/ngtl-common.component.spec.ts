import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgtlCommonComponent } from './ngtl-common.component';

describe('NgtlCommonComponent', () => {
  let component: NgtlCommonComponent;
  let fixture: ComponentFixture<NgtlCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgtlCommonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgtlCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
