import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProtudoComponent } from './lista-protudo.component';

describe('ListaProtudoComponent', () => {
  let component: ListaProtudoComponent;
  let fixture: ComponentFixture<ListaProtudoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaProtudoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaProtudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
