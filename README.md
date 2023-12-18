# Skap - Plataforma de Anúncios de Veículos Usados

O Skap é uma plataforma de venda de veículos usados que permite aos usuários anunciar, visualizar ofertas, favoritar anúncios e entrar em contato com os vendedores. O projeto é composto por um front-end desenvolvido em React, um back-end em Node.js e utiliza um banco de dados SQL.

Link back-end: https://github.com/Lucas-Benfica/skap-api

## Funcionalidades Principais

- **Anúncios de Veículos Usados**: Os usuários podem anunciar veículos usados, fornecendo todas as informações necessárias sobre o carro.

- **Busca e Ordenação**: Os usuários podem buscar veículos por categoria, usar a busca para encontrar veículos específicos e ordenar os resultados da pesquisa de acordo com suas preferências.

- **Visualização Detalhada**: Ao clicar em um anúncio, os usuários podem visualizar todas as informações do veículo, incluindo dados de contato do vendedor. Eles também podem favoritar o anúncio.

- **Favoritos**: Os usuários podem salvar anúncios como favoritos para referência futura.

- **Gerenciamento de Anúncios**: Os usuários podem gerenciar seus próprios anúncios na seção "Meus Anúncios", onde podem editar, apagar ou confirmar a venda de seus veículos.

- **Cadastro e Login**: O site possui um sistema de cadastro e login que mantém os usuários online.

## Próximas Etapas

A próxima etapa do projeto é melhorar o layout, tornando-o mais atraente e intuitivo para os usuários. Isso pode incluir melhorias na experiência do usuário, design responsivo e recursos visuais aprimorados.

## Como Utilizar

Acesse a plataforma em seu navegador em [https://skap-front.vercel.app/](https://skap-front.vercel.app/).

Para utilizar o aplicativo:

1. Explore as categorias disponíveis na página inicial.

2. Na página "Comprar", visualize todas as ofertas disponíveis e use a busca para encontrar veículos específicos.

3. Ao clicar em um anúncio, você pode visualizar as informações detalhadas do veículo e favoritá-lo.

4. Na página "Vender", você pode inserir informações sobre seu veículo e criar um anúncio.

5. Na seção "Meus Anúncios", gerencie seus próprios anúncios, incluindo edição, exclusão ou confirmação de venda.

6. O site mantém você online com um sistema de cadastro e login.
   
7. Para favoritar ou criar um anúncio, você deve estar logado.

Claro, aqui está o texto final em formato Markdown:

# Executando o Projeto Localmente

Para executar este projeto localmente, siga as instruções abaixo:

## 1. Baixar ou Clonar o Repositório

Primeiro, baixe o repositório usando o botão de download ou clone-o.

## 2. Instalar Dependências

Navegue até a pasta do projeto e execute o seguinte comando para instalar as dependências:

```bash
npm install
```

## 3. Configurar o Arquivo .env

Crie um arquivo chamado `.env` na pasta do projeto e insira as informações de acesso ao back-end/API. Essas informações podem incluir o link para o deploy ou o localhost, e podem ser encontradas no repositório do back-end. Exemplo de conteúdo do arquivo `.env`:

```env
VITE_API_URL = LINK API
```

## 4. Rodar o Projeto

Após configurar o arquivo `.env`, execute o projeto usando o seguinte comando:

```bash
npm run dev
```

No console, você verá um link para um localhost onde o projeto está rodando.

Vale lembrar que se você estiver utilizando um banco de dados próprio, o site pode não exibir anúncios prévios e algumas funcionalidades podem não funcionar sem carros anunciados no banco de dados.

Tenha certeza de seguir as instruções do back-end para configurar o banco de dados adequadamente antes de rodar o projeto.

## Contato

Para dúvidas ou sugestões, entre em contato pelo e-mail lucassoaresbenfica@gmail.com.

Aproveite o Skap para encontrar e anunciar veículos usados!
