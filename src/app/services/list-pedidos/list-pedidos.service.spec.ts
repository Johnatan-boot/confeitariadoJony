import { TestBed } from '@angular/core/testing';

import { ListPedidosService } from './list-pedidos.service';

describe('ListPedidosService', () => {
  let service: ListPedidosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListPedidosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
