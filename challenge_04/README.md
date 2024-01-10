## Perguntas a serem respondidas:
 - Como pegar valores pelo DOM?
  > Há diversas formas de obter os elementos do DOM. A melhor opção atualmente é `document.querySelector` que permite obter pelo seletor CSS. Entretanto, há outras opções como `document.getElementById()`, `document.getElementsByName()` e `document.getElementsByClassName()`
 - Como alterar valor de algo pelo DOM?
 > Para se alterar elemento há diversas formas também e algumas só são permitidas para tal tipo de elemento. Em casos de `inputs` você pode utilizar `.value = 'valor'`. Em casos como elemento `div` você pode utilizar `.innerHTML = 'valor'`
 - O que é hoisting no JS?
 > É um comportamento em Javascript onde as declarações de variáveis e funções são movidas para o topo do código, porém apenas as declarações e não seus valores. Exemplo:
 ```js
  console.log(x) // undefined
  var x = 5;
  console.log(x) // 5
 ```
 > O código é interpretado como:
 ```js
  var x;
  console.log(x) // undefined
  x = 5;
  console.log(x) // 5
 ```
 > Entretanto isso não acontece com `const` ou `let`.
 - O que é callback?
 > Callback refere-se a uma função que é passado como argumento para outra função e é executada dentro dessa função. Um exemplo de uso é em `setTimeout` que necessita de uma callback e um tempo em milissegundos.
 ```js
  function myFunction() {
    console.log(new Date())
  }

  setTimeout(myFunction, 1000)
 ```
 > Após 1 segundo irá executar a função `myFunction`
 - o que é Arrow Function?
 > São uma forma mais concisa de escrever funções. Elas oferecem uma sintaxe mais curta e algumas diferenças no comportamento em comparação com as funções tradicionais. A principal diferença é a manipulação do contexto (`this`).
