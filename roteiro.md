Funcionalidades: Cadastro no site Adopet

Cenário: Realizar um cadastro no site com sucesso.

passos: 

       O usuário acessa a página de cadastro.
       O usuário preenche o campo "NOME"
       O usuário preenche o campo "E-MAIL" com um endereço de email válido.
       O usuário preenche o campo "SENHA" com uma senha válida.
       O usuário preenche o campo "CONFIRMAÇÃO DE SENHA" com a mesma senha inserida no passo anterior.
       O usuário clica no botão "CADASTRAR".

Resultado esperado:

       O sistema processa as informações fornecidas.

Regra de negócio:
       E-mail e senha são campos obrigatórios para o cadastro.
       

Cenário: Falha na tentativa de cadastro.

passos:
      
      O usuário acessar a página de cadastro.
      O usuário deixar algum dos campos obrigatórios (como o nome, e-mail ou a confirmação da senha) em branco.
      O usuário clicar no botão de "CADASTRAR".

Resultado esperado:

      O sistema valida os campos obrigatórios em branco.
      O sistema exibe mensagens de erro indicando que os campos obrigatórios devem ser preenchidos.
      
_________________________________________________________________________________
Funcionalidade: Login no site Adopet

Cenário: Login no sistema com sucesso.

passos:

      O usuário acessar a página de login
      O usuário inserir o e-mail "gabriely@email.com" e a senha "Senha1234" nos campos correspondentes;
      O usuário clicar no botão "Entrar".

Resultado esperado:

       O sistema autentica as credenciais fornecidas.
       O sistema redireciona o usuário para a página "/home".

Cenário: Falha no login no sistema.

passos:

       O usuário acessa a página de login.
       O usuário insere um e-mail e senha fora do padrão aceito nos campos correspondentes.
       O usuário clica no botão de login.

Resultados Esperados:

      O sistema valida as credenciais fornecidas.
      O sistema exibe mensagens de erro específicas para o e-mail e senha inseridos incorretamente, como: "Por favor, verifique o e-mail digitado" e/ou "A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres".

Regra de Negócio:

O e-mail deve ter um formato válido.
A senha deve conter pelo menos uma letra maiuscula, um número e ter entre 6 e 15 caracteres
______________________________________________________________________________________________

Funcionalidades: Testar os botões. 

Cenário: Testar a funcionalidade do botão "Ver pets disponíveis para adoção", "HOME", de "MENSAGEM" e o botão “Falar com o responsável”.

passos: 
      

       O usuário deve clicar no botão ‘Ver pets disponíveis para adoção”
       O usuário deve testar os botão de homepassed
       O usuário Deve testar os botão de mensagenspassed
       O usuário visita a página de /login do Adopetpassed
       O usuário visita a página de /home do Adopetpassed
       O usuário visita a página de /home do AdoPet e clique no botão “Falar com o responsável”passed
      
Resultados Esperados:
         
         Todos os botões devem funcionar sem falha.
________________________________________________________________________________________________

Funcionalidades: Verificar texto.

Cenário: Visite a página principal do AdoPet e verifique se o texto “Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!” está presente no html.

passos: 

       Entrar na página principal e verificar "Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!” está presente no html.

Resultados Esperados:
        Encontrar no html.
________________________________________________________________________________________________






    
