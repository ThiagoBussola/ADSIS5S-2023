# Assincronia, Callbacks e Promises



## Funções Assíncronas em JavaScript

Em JavaScript, uma função assíncrona é uma função que não bloqueia a thread principal de execução. Isso significa que ele, o JavasScript não espera a conclusão de uma tarefa de execução longa antes de continuar a executar outro código.

Em vez disso, as funções assíncronas usam callbacks ou promessas para lidar com os resultados de tarefas de execução longa. Quando a tarefa é concluída, o callback ou promessa é chamado e o resultado é passado de volta para a função.

Aqui está um exemplo simples de uma função assíncrona que usa um retorno de chamada:

```javascript
function waitThreeSeconds(callback) {

    setTimeout(() => { 

        callback('Done!'); 

    }, 3000); 
} 
waitThreeSeconds(function(result) { 
    console.log(result); // Output: 'Done!' 
});
waitThreeSeconds((result) => { 
    console.log(result); // Output: 'Done!' 
});
```



Neste exemplo, a função waitThreeSeconds usa o método setTimeout para aguardar três segundos antes de chamar a função callback que foi passada como parâmetro. Quando o tempo limite é concluído, a função de callback é chamada com a string 'Concluído!', que é registrada no console.

## Callbacks

Um retorno de chamada ou Callback é uma função que é passada como parâmetro para outra função e é chamada quando a tarefa é concluída. Callbacks são uma maneira comum de lidar com tarefas assíncronas em JavaScript, mas podem ser difíceis de gerenciar quando você tem vários callbacks que dependem uns dos outros.

Aqui está um exemplo de uso de callbacks para lidar com tarefas assíncronas:



```javascript
function fetchData(callback) {

    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => { callback(data); }); 

} 

fetchData(data => { 
    console.log(data); // Output: { userId: 1, id: 1, title: 'delectus aut autem', completed: false } 
});
```



Neste exemplo, a função fetchData usa o método fetch para fazer uma solicitação HTTP e retorna os dados como um objeto JSON. O método then é usado para encadear duas operações assíncronas: converter a resposta para JSON e chamar a função de retorno de chamada com os dados resultantes.

## Promises



##### Definição 1

Uma promessa é um objeto que representa a eventual conclusão (ou falha) de uma operação assíncrona e permite que você encadeie operações assíncronas juntas.

---

##### Definição 2

Uma promessa é um objeto que representa um valor que pode ainda não estar disponível, mas será resolvido em algum momento no futuro. É uma maneira de lidar com operações assíncronas em JavaScript de maneira mais organizada do que usar callbacks.

---

**Uma promessa tem três estados: ** pendente, cumprida ou rejeitada. Quando uma promessa está pendente, significa que a operação que ela representa ainda está em andamento. Depois que a operação for concluída com êxito, a promessa será cumprida com um valor. Por outro lado, se a operação falhar, a promessa é rejeitada com erro.

Aqui está um exemplo de uma promessa simples que representa uma operação assíncrona que é resolvida após um segundo:



```javascript
const myPromise = new Promise((resolve, reject) => {

  setTimeout(() => {

    resolve("Success!");

  }, 1000);

});

myPromise.then((result) => {
  console.log(result); // Output: "Success!"
});
```



Neste exemplo, criamos uma nova promessa que resolve após um segundo usando a função setTimeout. Passamos uma função para o construtor de promessa que recebe dois argumentos, resolver e rejeitar. Chamamos resolver após um segundo para cumprir a promessa com o valor "Success!". Finalmente, usamos o método then para lidar com a promessa cumprida e registrar o resultado.



## Async/await

Async/await é um syntactic sugar construído sobre promessas que torna o trabalho com código assíncrono mais fácil e legível. Ele permite que você escreva código assíncrono como se fosse um código síncrono.

A palavra-chave **async** é usada para definir uma função assíncrona que retorna uma promessa. Dentro de uma função assíncrona, você pode usar a palavra-chave **await** para pausar a execução da função até que uma promessa seja cumprida. Isso facilita a escrita de código que parece síncrono, mas na verdade é assíncrono por de baixo dos panos.

Aqui está um exemplo de uma função assíncrona que usa async/await:



```javascript
async function myAsyncFunction() {

  const result = await myPromise;

  console.log(result); // Output: "Success!"

}

myAsyncFunction();
```



Neste exemplo, definimos uma função assíncrona chamada myAsyncFunction. Dentro da função, usamos a palavra-chave await para esperar que a promessa myPromise seja cumprida. Depois que a promessa é cumprida, registramos o resultado no console.

A principal diferença entre promessas e async/await está na sintaxe. As promessas usam o método **then** para lidar com o cumprimento de uma promessa, enquanto async/await usa a palavra-chave **await** para pausar a execução de uma função assíncrona até que uma promessa seja cumprida.

As promessas são uma abstração de nível inferior do que async/await e são úteis para cenários mais complexos em que você precisa de mais controle sobre o fluxo de execução. Async/await é mais fácil de ler e gravar e geralmente é usado para operações assíncronas mais simples.



## Entendendo nosso código!

```javascript
import { writeFile} from "fs/promises"

export class RequestDataApi {

  async getAllPokeUrl() {

     const pokeApiResponse = await fetch('https://pokeapi.co/api/v2/pokemon?limit=2')

      await pokeApiResponse.json().then(result => {
           writeFile('allPokeUrl.json', JSON.stringify(result.results))
       })
   }
}
```



Vamos corrigir um erro logo de cara. 

```javascript
import { writeFile} from "fs/promises"

export class RequestDataApi {

  async getAllPokeUrl() {

     const pokeApiResponse = await fetch('https://pokeapi.co/api/v2/pokemon?limit=2')
      // aqui não precisamos do await, e ele foi a causa da confusão!
      pokeApiResponse.json().then(result => {
           writeFile('allPokeUrl.json', JSON.stringify(result.results))
       })
   }
}
```

Seguindo!


```javascript
import {writeFile} from 'fs/promises'
```

O código acima está importando a função writeFile do módulo integrado Node.js fs/promises. Esta função permite gravar dados em um arquivo.



```javascript
const pokeApiResponse = await fetch('https://pokeapi.co/api/v2/pokemon?limit=2')
```



A linha de código acima está usando fetch para fazer uma solicitação HTTP para o endpoint PokeAPI em https://pokeapi.co/api/v2/pokemon?limit=2. A função de busca retorna uma Promise que resolve para um objeto Response contendo informações sobre a resposta HTTP.

A palavra-chave **await** é usada para esperar que essa promessa seja resolvida antes de executar a próxima linha de código. Isso ocorre porque pokeApiResponse ainda não está disponível até que a promessa seja resolvida. Nossa constante só passa a existir e ter um valor armazenado nela quando a promessa do fetch for resolvida.



```javascript
pokeApiResponse.json().then(result => {
    writeFile('allPokeUrl.json', result.results)

})
```



A próxima linha de código usa o método **json()** no objeto **Response** armazenado em **pokeApiResponse** para converter a resposta da API para o formato JSON. Esse método também retorna uma promessa que resolve os dados JSON, os transformando em objetos.

Aqui é onde fica um pouco interessante. O código está usando o método **then()** para aguardar a resolução da **Promise** e, em seguida, executar uma função de **callback** que grava os dados em um arquivo usando a função **writeFile()**. A função **writeFile** também retorna uma **Promise**, mas não está sendo aguardada.

Então, por que o método **then()** está sendo usado aqui? Neste caso, ele está sendo **usado para tratar a Promise retornada pelo método json()**. A palavra-chave **await** só pode ser usada dentro de uma função assíncrona, portanto, **se não usarmos .then(), precisaremos agrupar a função callback em uma função assíncrona para usar await.**

Alternativamente, poderíamos usar outra palavra-chave **await** para aguardar a resolução da **Promise** **retornada** **pela** **função** **writeFile**, mas, neste caso, **não é necessário porque não estamos fazendo nada com a Promise retornada por writeFile**.

Portanto, em resumo, o código está usando **await** para aguardar a conclusão da solicitação HTTP para o endpoint PokeAPI. E está utilizando **json()** para extrair os dados JSON da resposta transformando-os em um objeto. **Em seguida, o método then() é usado para aguardar a promessa retornada por json() para resolver e executar uma função de callback que grava os dados JSON em um arquivo usando writeFile().**

**
