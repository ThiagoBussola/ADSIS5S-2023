import { Request, Response} from 'express'
import productService from '../service/productService'

class ProductController {
    async create(req: Request, res: Response){
        productService.createProductList(req.body)

        return res.status(201).send()
    }

    async list(req: Request, res: Response) {
        const productList = await productService.findProducts()

        return res.status(200).json(productList)
    }

    async getStock(req: Request, res: Response) {
        const stockList = await productService.getStock()

        return res.status(200).json(stockList)
    }
    
    async getStockValue(req: Request, res: Response) {
        const stockValue = await productService.getStockValue()

        return res.status(200).json(stockValue)
    }

}

export default new ProductController()