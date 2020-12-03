import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraProtudoComponent } from './cadastra-protudo.component';

describe('CadastraProtudoComponent', () => {
  let component: CadastraProtudoComponent;
  let fixture: ComponentFixture<CadastraProtudoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastraProtudoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraProtudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
