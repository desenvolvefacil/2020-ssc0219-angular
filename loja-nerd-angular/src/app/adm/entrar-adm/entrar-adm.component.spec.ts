import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrarAdmComponent } from './entrar-adm.component';

describe('EntrarAdmComponent', () => {
  let component: EntrarAdmComponent;
  let fixture: ComponentFixture<EntrarAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrarAdmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrarAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
