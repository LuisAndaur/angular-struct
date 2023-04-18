import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.models';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: FormGroup = new FormGroup({});
  usuarios:Usuario[] = [];

  constructor(private loginServices:LoginService, private router: Router) { }

  ngOnInit(): void {
    this.loginServices.setLS();

    this.user = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.minLength(5)]),
      pass: new FormControl("", [Validators.required, Validators.minLength(6)])
    });

    console.log(this.loginServices.getLS('usuarios'));
  }

  private ChangePage(routeString:string):void
  {
    this.router.navigate(['/' + routeString]);
  }


  ingresar(){

    let aux = this.loginServices.getLS('usuarios');

    if(aux != null){
      let flag = false;
      this.usuarios = JSON.parse(aux);

      this.usuarios.forEach(x => {
        if(x.email == this.user.get('email')?.value && x.pass == this.user.get('pass')?.value){
          this.ChangePage('home');
        }
        
      });

      if(!flag){
        console.log("ERROR");
      }
      
    }
  }

  // SignIn():void
  // {
  //   console.log(this.user.email);
  //   this.AuthService.SignIn(this.user.email, this.user.password)
  //   .then(response=>
  //     {
  //       this.fireStorage.AddLog(this.user.email);
  //       this.ChangePage('home');
  //       console.log(response);
  //     })
  //   .catch(error => 
  //     {
  //       this.variableError = true;
  //       this.mensajeError = "Error when you trying to log in";
  //       console.log(error)
  //     });
  // }

}
