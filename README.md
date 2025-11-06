# Mob Project

Um projeto React moderno criado com Vite, TypeScript e Tailwind CSS.

## 🚀 Tecnologias

- **React 18** - Biblioteca para interfaces de usuário
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS utilitário
- **React Router** - Roteamento para React
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de schemas
- **Axios** - Cliente HTTP
- **Vitest** - Framework de testes
- **ESLint** - Linter para JavaScript/TypeScript

## 📦 Instalação

```bash
# Instalar dependências
npm install

# ou
yarn install
```

## 🛠️ Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview

# Linting
npm run lint
npm run lint:fix

# Testes
npm run test
npm run test:run
npm run test:ui

# Servidor JSON (mock API)
npm run dev:server
```

## 🏗️ Estrutura do Projeto

```
src/
├── components/     # Componentes reutilizáveis
├── pages/         # Páginas da aplicação
├── hooks/         # Custom hooks
├── services/      # Serviços e APIs
├── utils/         # Funções utilitárias
├── types/         # Definições de tipos TypeScript
├── test/          # Configurações de teste
└── assets/        # Assets estáticos
```

## 🎨 Styling

O projeto usa Tailwind CSS com configuração customizada. As variáveis CSS estão definidas em `src/index.css`.

## 🧪 Testes

Os testes são executados com Vitest e Testing Library. Para executar os testes:

```bash
npm run test
```

## 📝 Desenvolvimento

1. Clone o repositório
2. Instale as dependências: `npm install`
3. Execute o servidor de desenvolvimento: `npm run dev`
4. Abra [http://localhost:5173](http://localhost:5173) no navegador

## 🚀 Deploy

Para fazer o build de produção:

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/`.
# mob-project
