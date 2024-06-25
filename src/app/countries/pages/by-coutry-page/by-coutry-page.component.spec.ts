import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByCoutryPageComponent } from './by-coutry-page.component';

describe('ByCoutryPageComponent', () => {
  let component: ByCoutryPageComponent;
  let fixture: ComponentFixture<ByCoutryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ByCoutryPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ByCoutryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
