# Cifra Reader

Cifra Reader é uma aplicação web que permite aos usuários visualizar cifras e letras de músicas com rolagem automática. O design é inspirado no [Cifra Club](https://www.cifraclub.com.br/), oferecendo uma interface intuitiva para gerenciamento de letras e upload de arquivos.

## Funcionalidades

- **Barra Superior:**
  - Inclui uma imagem de logo.
  - Inclui uma barra de pesquisa para encontrar letras específicas.

- **Barra Lateral Recolhível:**
  - Exibe uma lista de letras armazenadas na biblioteca do usuário.
  - Integra-se com o Firebase Storage para gerenciar a biblioteca.
  - Permite que os usuários façam upload de arquivos de letras diretamente da aplicação web.

- **Rolagem Automática:**
  - Implementa uma funcionalidade para rolar automaticamente a página de letras.
  - Permite aos usuários definir a velocidade de rolagem através da interface.

## Tecnologias

- **Frontend:** Node.js, React
- **Backend:** Firebase Functions
- **Armazenamento:** Firebase Storage
- **Hospedagem:** Firebase Hosting

## Configuração

### Configuração do Firebase

Certifique-se de que o Firebase está configurado no seu projeto. Assegure-se de que o Firebase Storage e Firebase Hosting estejam configurados conforme necessário.

### Instruções para Desenvolvimento

1. **Clonar o Repositório:**

   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd cifra-reader