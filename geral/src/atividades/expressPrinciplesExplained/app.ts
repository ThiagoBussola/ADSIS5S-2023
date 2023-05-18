// 2 - importamos o express
import express from 'express'
// 27 - importar a constante routes que está em routes.ts
import routes from './routes'

import mongoose from 'mongoose'

// 1 - criamos uma classe app
class App {
    // 3 - Definimos uma propriedade chamada Express, que deve
    // ser do tipo express.Application
    public express: express.Application

    // 4 - Criamos um método construtor
    public constructor() {
        // 5 - instanciamos o express dentro da propriedade express
        // para que quem chame a propriedade express, não precisse instancialo novamente
        // e nem precise usar a sintaxe "aplicacao.express".funcaoDoExpressQueQueroUsar
        this.express = express()

        // 8 - estamos dizendo ao construtor, que quem instanciar essa classe
        // já vai por padrão executar o método middleware
        this.middleware()
        // 28 - estamos dizendo ao construtor que quem instanciar essa classe
        // já vai por padrão executar o método routes
        this.routes()
        // 32 - chamando o método database e garantindo que ele será executado sempre que a classe for instanciada
        this.database()

    }

    // 6 - Criamos um método middleware
    public middleware(): void {
        // 7 - habilitando o express a ler/entender requisicoes em
        // formato json
        this.express.use(express.json())
    }

    // 29 - Criando um método database que será responsavel por fazer a conexão com o mongo
    public async database() {
        try {
            // Estamos desabilitando a mensagem de depreciado para a strictQuery
            mongoose.set("strictQuery", true)
            // 30 - utilizando o mongoose e a função connect para conectar no nosso banco que está na nuvem
            await mongoose.connect('mongodb://0.0.0.0:27017')
            console.log('Connect database success')

        } catch (err) {
            console.error('Connect database fail, error', err)
        }
    }

    // 25 - Criamos um método chamado routes
    public routes(): void {
        // 26 - dizendo para o express que ele deve habilitar as rotas que estão
        // declaradas em routes
        this.express.use(routes)
    }
}
// 9 - Estamos exportando a Classe app, já instanciada e quem chamar ela
// já estará acessando o atributo .express, que contém a instancia de express
export default new App().express