import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosAdmComponent } from './pedidos-adm.component';

describe('PedidosAdmComponent', () => {
  let component: PedidosAdmComponent;
  let fixture: ComponentFixture<PedidosAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidosAdmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
