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

  constructor(private router: Router) {}

  toggleMode(isLogin: boolean) {
    this.isLoginMode = isLogin;
  }
  // Para o login, o usuário deve fornecer um nome de usuário e senha.
  // Para o registro, o usuário deve fornecer um nome de usuário, senha e nome de exibição.
  onSubmit() {
    if (this.isLoginMode) {
      this.login();
    } else {
      this.register();
    }
  }

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
  }
}
