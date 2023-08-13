import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Credenciais } from 'src/app/models/credenciais';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  creds: Credenciais = {
    email: '',
    senha: ''
  }

  email = new FormControl(null, Validators.email);
  senha = new FormControl(null, Validators.minLength(3));

  constructor(
    private toast: ToastrService,
    private service: AuthService,
    private router: Router) { }

  ngOnInit(): void { }

  logar() {
    this.service.authenticate(this.creds).subscribe(resposta => {
      let token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ2YWxkaXJAbWFpbC5jb20iLCJleHAiOjE2OTI1MjU2NzN9.OJabkEXXXXHZREJO9QkI0jzKJbp7kAv1EQsYbqfxELXPlWw-ddvqSkkBEehT6Pn0g2IsUgdfv_TIAXFdBKwXDw';
      //this.service.successfulLogin(resposta.headers.get('Authorization').substring(7));
      this.service.successfulLogin(token);
      this.router.navigate([''])
    }, () => {
      this.toast.error('Usuário e/ou senha inválidos');
    })
  }

  validaCampos(): boolean {
    return this.email.valid && this.senha.valid
  }
}
