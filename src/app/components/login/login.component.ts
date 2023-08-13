import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Credenciais} from "../../models/credenciais";
import {ToastrService} from "ngx-toastr";

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
    private router: Router) { }

  ngOnInit(): void { }

  logar() {
    this.toast.error('Usuário ou senha inválidos','Login');
  }

  validaCampos(): boolean {
    return this.email.valid && this.senha.valid
  }

}
