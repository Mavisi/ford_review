import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  imports: [CommonModule, FormsModule],
})
export class AuthComponent {
  isLoginMode = true;
  showPasswordLogin = false;
  showPasswordRegister = false;

  loginData = {
    username: '',
    password: '',
  };

  registerData = {
    username: '',
    password: '',
    displayName: '',
  };

  acceptedTerms = false;
  modalTermosAberto = false;

  constructor(private router: Router) {}

  // Alterna entre modo Login e Cadastro
  toggleMode(isLogin: boolean) {
    this.isLoginMode = isLogin;
  }

  // Quando o formulário for submetido
  onSubmit() {
    if (this.isLoginMode) {
      this.login();
    } else {
      this.register();
    }
  }

  // Processa o login do usuário
  private login() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(
      (u: any) =>
        u.username === this.loginData.username &&
        u.password === this.loginData.password
    );

    if (user) {
      localStorage.setItem('loggedUser', JSON.stringify(user));
      alert('Login realizado com sucesso!');
      this.router.navigate(['/dashboard']);
    } else {
      alert('Usuário ou senha incorretos.');
    }
  }

  // Cadastra novo usuário
  private register() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const exists = users.some(
      (u: any) => u.username === this.registerData.username
    );

    if (exists) {
      alert('Este nome de usuário já está em uso.');
      return;
    }

    const newUser = { ...this.registerData };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Cadastro realizado com sucesso! Faça login agora.');
    this.toggleMode(true);
    this.acceptedTerms = false;
  }

  // Abre a modal de termos
  abrirModalTermos(event: Event) {
    event.preventDefault(); // evita navegação do link
    this.modalTermosAberto = true;
  }

  // Fecha a modal de termos
  fecharModalTermos() {
    this.modalTermosAberto = false;
  }
}
