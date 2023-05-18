// 10 - importei a classe App de app.ts
import app from "./app";

// 11 - Criei uma função main, que será executada assim que aplicação for iniciada
function main() {
    try {
        // 12 - utilizando o método listen do express, para criar um servidor na porta 3000, e no "dominio" localhost
        // 13 - depois passamos como paramêtro, uma função anonima e assincrona, que irá escrever uma mensagem assim que o servidor for iniciado com sucesso
        app.listen(3000, 'localhost', async () => {
            console.log('starting server')
        })
    } catch (err) {
        // 14 - no catch estamos capturando qualquer erro que aconteça durante a iniciação do servidor, e exibindo com uma mensagem para o console
        console.error('Starting server Error', err)
    }
}
// 15 - chamamos a função main para ser executada
main()