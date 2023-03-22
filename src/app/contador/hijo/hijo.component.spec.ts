import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { HijoComponent } from './hijo.component';
import { NietoComponent } from '../nieto/nieto.component';
import { multiplicar } from '../contador.actions';
import { Store } from '@ngrx/store';

describe('HijoComponent', () => {
  let component: HijoComponent;
  let fixture: ComponentFixture<HijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HijoComponent, NietoComponent],
      providers: [provideMockStore({})],
    }).compileComponents();

    fixture = TestBed.createComponent(HijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
