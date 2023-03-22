import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NietoComponent } from './nieto.component';

import { provideMockStore } from '@ngrx/store/testing';

describe('NietoComponent', () => {
  let component: NietoComponent;
  let fixture: ComponentFixture<NietoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NietoComponent],
      providers: [provideMockStore({})],
    }).compileComponents();

    fixture = TestBed.createComponent(NietoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
