import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListorcamentosComponent } from './listorcamentos.component';

describe('ListorcamentosComponent', () => {
  let component: ListorcamentosComponent;
  let fixture: ComponentFixture<ListorcamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListorcamentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListorcamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
