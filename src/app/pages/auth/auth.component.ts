import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../firebase.config';

@Component({
  standalone: true,
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  imports: [CommonModule, FormsModule, RouterModule], 
})
export class AuthComponent implements AfterViewInit {
  @ViewChild('bgVideo') bgVideo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    // ✅ Força o vídeo a iniciar sem som
    this.bgVideo.nativeElement.muted = true;
    this.bgVideo.nativeElement.play();
  }

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

  toggleMode(isLogin: boolean) {
    this.isLoginMode = isLogin;
  }

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
    this.acceptedTerms = false;
  }

  abrirModalTermos(event: Event) {
    event.preventDefault();
    this.modalTermosAberto = true;
  }

  fecharModalTermos() {
    this.modalTermosAberto = false;
  }

  loginWithGoogle() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const newUser = {
          username: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
        };
        localStorage.setItem('loggedUser', JSON.stringify(newUser));
        this.router.navigate(['/dashboard']);
      })
      .catch((error) => {
        alert('Erro ao fazer login com Google: ' + error.message);
      });
  }
}
