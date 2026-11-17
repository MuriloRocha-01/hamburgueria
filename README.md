<h1 align="center">🍔 Hamburgueria</h1>

<p align="center"><em>Cardápio digital por QR Code: o cliente escolhe os pratos na mesa e o pedido segue direto para a cozinha.</em></p>

<p align="center">
  <a href="#-sobre">Sobre</a> · <a href="#-funcionalidades">Funcionalidades</a> · <a href="#-tecnologias">Tecnologias</a> · <a href="#-como-rodar">Como rodar</a> · <a href="#-contato">Contato</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/status-em%20desenvolvimento-f59e0b?style=flat-square" alt="Status: em desenvolvimento" />
  <img src="https://img.shields.io/badge/tipo-projeto%20de%20estudo-0ea5e9?style=flat-square" alt="Tipo: projeto de estudo" />
  <img src="https://img.shields.io/badge/ano-2026-64748b?style=flat-square" alt="Ano: 2026" />
</p>

<p align="center">
  <img src="docs/telas/cardapio.png" alt="Cardápio do app" width="260" />
  &nbsp;&nbsp;
  <img src="docs/telas/prato.png" alt="Detalhe de um prato" width="260" />
  &nbsp;&nbsp;
  <img src="docs/telas/confirmar-pedido.png" alt="Confirmação do pedido da mesa" width="260" />
</p>

<p align="center"><sub>Capturas feitas com uma API de teste e pratos fictícios.</sub></p>

---

## 💻 Sobre

Aplicativo (Expo / React Native, roda no celular e na web) para uma hamburgueria. O cliente lê o QR Code da mesa, monta o carrinho e finaliza o pedido. O back-end grava no PostgreSQL e avisa a cozinha em tempo real por WebSocket.

> **Tipo:** projeto de estudo · **Ano:** 2026

## ✨ Funcionalidades

- Identificação da mesa por QR Code ou digitando o número.
- Cardápio com busca, categorias e destaques.
- Página do prato e carrinho com quantidades e total.
- Envio do pedido (`POST /pedidos`) com os itens da mesa.
- Back-end que avisa novos pedidos e mudanças de status por Socket.IO.

## 🎯 Dores que resolve

- Cliente esperando o garçom só para ver o cardápio ou fazer o pedido.
- Pedido anotado errado ou perdido no caminho até a cozinha.
- Cozinha sem uma visão única dos pedidos abertos.

## 💼 Tecnologias

<img src="https://img.shields.io/badge/React%20Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Native" />
<img src="https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white" alt="Expo" />
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/NativeWind-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="NativeWind" />
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
<img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
<img src="https://img.shields.io/badge/Socket.IO-010101?style=for-the-badge&logo=socketdotio&logoColor=white" alt="Socket.IO" />
<img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />

| Tecnologia | Para que usei |
| --- | --- |
| **Expo + expo-router** | App com navegação por arquivos, no celular e na web. |
| **NativeWind** | Estilo com classes Tailwind no React Native. |
| **expo-camera** | Leitura do QR Code da mesa. |
| **Express + TypeScript** | API REST em camadas (rota, serviço, repositório). |
| **Socket.IO** | Avisos em tempo real de pedidos. |
| **PostgreSQL (`pg`)** | Pedidos, itens e cardápio. |

## 🚀 Como rodar

**Back-end** (`BACK-END/`): crie um `.env` com `DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USER`, `DB_PASSWORD` e `API_PORT`.

```bash
cd BACK-END
npm install
npm run dev
```

**Aplicativo** (`FRONT-END/`): aponte `EXPO_PUBLIC_API_URL` para a API (veja `.env`).

```bash
cd FRONT-END
npm install
npm run web        # ou: npm start (Expo Go / emulador)
```

## 🗂 Estrutura do projeto

```text
BACK-END/    API Express: rotas, serviços, repositórios e sockets
FRONT-END/   aplicativo Expo / React Native
docs/        capturas de tela
```

## 🧭 Próximos passos

- [ ] Tela da cozinha com os pedidos abertos e botões de status
- [ ] Listar pedidos abertos na API (`GET /pedidos`)
- [ ] Gravar pedido e itens numa única transação
- [ ] Script das tabelas do banco e `.env.example` do back-end

## 📬 Contato

Disponível para freelas e novas oportunidades, **#OpenToWork** 🚀  
📧 [murilorochadelima.10@gmail.com](mailto:murilorochadelima.10@gmail.com) · 💼 [LinkedIn](https://www.linkedin.com/in/murilo-rocha-6706a41aa/) · 🐙 [GitHub](https://github.com/MuriloRocha-01) · 🌐 [Portfólio](https://oficial-portifolio-six.vercel.app)

---

<p align="center">Feito com 💙 por <a href="https://github.com/MuriloRocha-01">Murilo Rocha</a></p>
