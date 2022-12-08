import { User } from './../../models/login/user';
import { first, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private readonly API = 'api/usuarios';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<User[]>(this.API)
      .pipe(
        first(),
        // delay(5000),
        tap(usuarios => console.log(usuarios))
      );
  }


  //metodo responsavel Por receber o Registro
  save(record:User){
    console.log(record);
    return this.httpClient.post<User>(this.API, record).pipe(first());
    }





}








