# P2P Manager

Um sistema de gerenciamento de intenções de transações peer-to-peer (P2P) que permite aos usuários criar e consultar ofertas de compra e venda.

## Descrição

O P2P Manager é uma aplicação que facilita a criação de intenções de transações P2P, onde usuários podem registrar seu interesse em comprar ou vender ativos digitais. O sistema não executa as transações em si, mas serve como um ponto de encontro para que interessados possam consultar quais ofertas estão disponíveis.

## Funcionalidades

- Criação de intenções de P2P (compra ou venda)
- Consulta de intenções de P2P disponíveis
- Filtragem de intenções por moeda, tipo e outros critérios
- Expiração automática de intenções após um período configurável

## Arquitetura

O projeto segue os princípios da Clean Architecture e Domain-Driven Design (DDD):

- **Domain**: Contém as entidades de domínio, enums e interfaces de repositório
- **Application**: Contém os casos de uso que implementam a lógica de negócio
- **API**: Contém os controllers, DTOs e middlewares para a interface REST

## Tecnologias

- [NestJS](https://nestjs.com/) - Framework para construção de aplicações server-side
- [TypeScript](https://www.typescriptlang.org/) - Linguagem de programação
- [UUID](https://github.com/uuidjs/uuid) - Geração de identificadores únicos

## Pré-requisitos

- Node.js (v16 ou superior)
- npm (v7 ou superior)

## Instalação

```bash
# Clonar o repositório
git clone https://github.com/seu-usuario/p2p-manager.git

# Entrar no diretório
cd p2p-manager

# Instalar dependências
npm install
```

## Executando a aplicação

```bash
# Modo de desenvolvimento
npm run start:dev

# Modo de produção
npm run build
npm run start:prod
```

## Testes

```bash
# Testes unitários
npm run test

# Testes e2e
npm run test:e2e

# Cobertura de testes
npm run test:cov
```

## Exemplos de uso

### Criar uma intenção de P2P

```bash
curl -X POST http://localhost:3000/p2p-intents \
  -H "Content-Type: application/json" \
  -d '{
    "userName": "johndoe",
    "intentType": "SELL",
    "amount": 100.50,
    "currency": "USDT",
    "chain": "ETH",
    "description": "Payment for services"
  }'
```

## Estrutura do projeto

```
src/
├── app.module.ts              # Módulo principal da aplicação
├── main.ts                    # Ponto de entrada da aplicação
└── modules/
    └── p2p/                   # Módulo de P2P
        ├── api/               # Camada de API
        │   ├── controllers/   # Controllers REST
        │   └── dto/           # Data Transfer Objects
        ├── application/       # Camada de aplicação
        │   └── use-cases/     # Casos de uso
        └── domain/            # Camada de domínio
            ├── entities/      # Entidades de domínio
            ├── enums/         # Enumerações
            └── repositories/  # Interfaces de repositório
```

## Licença

[MIT](LICENSE)

## Autor

Seu Nome - [GitHub](https://github.com/seu-usuario)
