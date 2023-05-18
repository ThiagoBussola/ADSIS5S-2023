//20 - importar os TIPOS Request e Response do express
import { Request, Response } from 'express'

// 21 - Criamos uma classe chamada HealthCheckController
class HealthCheckController{
    // 22 - Criamos um método público e assincrono chamado check
    // que recebe dois parametros, um req do tipo Request e um res do tipo response
    public async check(req: Request, res: Response) {
        // 23 - estamos retornando um json escrito hello World para quem chamou este método
        return res.json('Hello World')
    }
}

// 24 - Exportando a classe já instanciada
export default new HealthCheckController()