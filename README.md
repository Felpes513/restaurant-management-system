# Restaurant Management System

> Projeto de estudo para aprender arquitetura microfrontend, desenvolvimento frontend moderno e criacao de interfaces profissionais com apoio de IA.

---

## O que e o Restaurant Management System?

O **Restaurant Management System** e um projeto frontend criado para estudar o desenvolvimento de interfaces para restaurantes, explorando conceitos de organizacao de componentes, separacao de responsabilidades e construcao de landing pages com uma aparencia mais profissional e realista.

A proposta inicial e desenvolver uma experiencia visual para um restaurante, com secoes como apresentacao, cardapio, galeria, contato e elementos reutilizaveis de interface.

---

## Como funciona?

1. **A aplicacao e estruturada em Angular**, usando componentes para separar partes da interface e facilitar a evolucao do projeto.

2. **As paginas e fluxos ficam organizados em features**, permitindo que cada area da aplicacao tenha sua propria estrutura.

3. **Componentes reutilizaveis ficam em shared**, como navbar, footer e outros elementos que podem ser usados em diferentes telas.

4. **A estilizacao utiliza Tailwind CSS**, ajudando a construir layouts responsivos com velocidade e consistencia visual.

5. **O projeto serve como base para estudos de microfrontend**, podendo evoluir futuramente para uma arquitetura com modulos independentes.

---

## Funcionalidades

- Landing page inicial para restaurante
- Secao hero com chamada principal
- Secao sobre o restaurante
- Secao de cardapio
- Estrutura preparada para galeria e contato
- Componentes compartilhados para navegacao e rodape
- Organizacao por `features` e `shared`
- Estilizacao com Tailwind CSS
- Testes unitarios configurados com Vitest

---

## Stack

| Camada | Tecnologia |
|---|---|
| Linguagem | TypeScript |
| Framework | Angular 21 |
| UI / Estilos | Tailwind CSS 4 |
| Build | Angular CLI / Vite |
| Testes | Vitest |
| Gerenciador de pacotes | npm |

---

## Estrutura do projeto

```text
src/
  app/
    features/
      home/
        sections/
          about/
          contact/
          gallery/
          hero/
          menu/
    shared/
      components/
        footer/
        navbar/
  assets/
  styles.css
```

Principais convencoes:

- `features`: paginas, fluxos e secoes principais da aplicacao
- `shared`: componentes reutilizaveis entre diferentes partes do projeto
- `assets`: imagens, icones e arquivos estaticos
- `styles.css`: estilos globais e importacao do Tailwind CSS

---

## Por que foi desenvolvido?

Este projeto foi criado como parte de um processo de aprendizado em frontend.

Os principais objetivos sao praticar:

- Como desenvolver interfaces modernas com Angular
- Como organizar um frontend pensando em escalabilidade
- Como evoluir uma aplicacao para uma arquitetura microfrontend
- Como utilizar IA como apoio no desenvolvimento de sites e landing pages
- Como criar telas mais profissionais, realistas e bem estruturadas

---

## Proximos passos

Algumas evolucoes possiveis:

- [ ] Finalizar as secoes de galeria, contato e rodape
- [ ] Adicionar responsividade completa para mobile, tablet e desktop
- [ ] Criar componentes reutilizaveis para botoes, cards e secoes
- [ ] Melhorar a identidade visual da landing page
- [ ] Adicionar imagens reais ou geradas por IA para o restaurante
- [ ] Criar testes para os principais componentes
- [ ] Estudar a separacao da aplicacao em microfrontends
- [ ] Adicionar deploy da aplicacao em uma plataforma frontend

---

## Rodando o projeto

### Instalando dependencias

```bash
npm install
```

### Executando em modo desenvolvimento

```bash
npm start
```

A aplicacao fica disponivel em:

```text
http://localhost:4200
```

### Gerando build de producao

```bash
npm run build
```

### Executando testes

```bash
npm test
```

---

## Scripts disponiveis

| Script | Descricao |
|---|---|
| `npm start` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a build de producao |
| `npm run watch` | Executa a build em modo observacao |
| `npm test` | Executa os testes unitarios |

---

## Aprendizados trabalhados

- Componentizacao de interfaces
- Organizacao de pastas em projetos frontend
- Uso de Angular com TypeScript
- Estilizacao com Tailwind CSS
- Criacao de landing pages realistas
- Uso de IA como ferramenta auxiliar no processo de desenvolvimento
- Primeiros passos para arquitetura microfrontend

---

<p align="center">Desenvolvido por <strong>Felipe Souza Moreira</strong></p>
