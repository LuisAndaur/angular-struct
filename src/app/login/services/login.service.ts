import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.models';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private usuarios:Usuario[] = [
    {
      email: "landaur@gmail.com",
      pass: "123456"
    },
    {
      email: "glopez@gmail.com",
      pass: "123456"
    },
    {
      email: "rsosa@gmail.com",
      pass: "123456"
    }
  ];

  constructor() { }

  setLS(){
    localStorage.setItem("usuarios", JSON.stringify(this.usuarios));
  }

  getLS(key:string){
    return localStorage.getItem(key);
  }

}
