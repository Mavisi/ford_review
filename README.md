# 🚗 Ford Reviews

Uma aplicação web interativa e responsiva para avaliações de veículos da Ford. Os usuários podem se cadastrar, fazer login (incluindo via Google), avaliar veículos, adicionar fotos, ver reviews de outros usuários e visualizar suas próprias avaliações. Tudo armazenado localmente no navegador com uma UI moderna e animada.

## ✨ Funcionalidades

- 🔐 Autenticação com usuário/senha
- 🔐 Login com Google (Firebase Auth)
- 📦 Armazenamento em `localStorage`
- 🏷️ Avaliações com nota (1 a 5 estrelas) e comentário
- 🖼️ Upload e exibição de fotos dos veículos
- 👤 Página "Meus Reviews" com todos os comentários do usuário
- 🎥 Tela de login com vídeo de fundo responsivo
- 📱 Interface responsiva (Bootstrap 5)
- 🌓 Modo offcanvas no menu lateral

---

## 🛠️ Tecnologias Utilizadas

- **Angular 17+**
- **Bootstrap 5**
- **Firebase Authentication**
- **localStorage**
- **Vercel (deploy)**

---

## 🚀 Como rodar localmente

1. Clone o repositório:

```bash
git clone https://github.com/Mavisi/ford_review
cd ford-reviews
```

2. Instale as dependências:

```bash
npm install
```

3. Rode a aplicação:

```bash
ng serve
```

4. Acesse:

```
http://localhost:4200
```

---

## 🧪 Teste com Usuário Simples

- Crie uma conta na aba **Cadastro**
- Aceite os Termos de Uso (conforme a LGPD)
- Faça login e experimente:

  - Avaliar veículos
  - Enviar fotos
  - Navegar entre abas e componentes

---

## ⚙️ Firebase

- A autenticação com Google utiliza Firebase.
- Certifique-se de adicionar seu domínio (ex: `vercel.app`) nos **domínios autorizados** do Firebase.

---

## 📄 Licença

Projeto desenvolvido por **Marcos Santana** para fins educacionais e de portfólio. Livre para uso e modificação. 🚀

---

## 📬 Contato

- Email: marcos.vssjr@outlook.com.com
- GitHub: [github.com/Mavisi](https://github.com/Mavisi)
- LinkedIn: [linkedin.com/in/m4visi](https://www.linkedin.com/in/m4visi/)

---

## 📁 Estrutura de Pastas

```
ford-review/
├── src/
│   ├── app/
│   │   ├── pages/
│   │   │   ├── auth/               # Tela de login/cadastro
│   │   │   ├── dashboard/          # Dashboard com filtros e cards
│   │   │   ├── car-details/        # Detalhes, avaliações e galeria
│   │   │   └── meus-reviews/       # Avaliações do usuário logado
│   │   ├── data/                   # Mock de veículos
│   │   ├── sidebar/                # Componente offcanvas lateral
│   │   ├── firebase.config.ts      # Configuração do Firebase
│   │   ├── app.routes.ts           # Rotas da aplicação
│   │   └── app.config.ts           # Configuração principal
│   ├── assets/
│   │   ├── images/                 # Imagens (logo, carros, etc.)
│   │   └── videos/                 # Vídeo de fundo do login
│   ├── index.html
│   └── styles.css
├── angular.json
├── tsconfig.json
├── package.json
└── README.md
```
## 

```

```