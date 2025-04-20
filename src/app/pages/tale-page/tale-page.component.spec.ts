import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalePageComponent } from './tale-page.component';

describe('TalePageComponent', () => {
  let component: TalePageComponent;
  let fixture: ComponentFixture<TalePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TalePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
