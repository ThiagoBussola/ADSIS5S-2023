import { writeFile, readFile } from 'fs/promises'


class ProductService {
    async createProductList(data) {
        
        await writeFile('products.json', JSON.stringify(data, null, 2))
    }

    async findProducts() {

        try {
            const productList = await readFile('products.json', "utf8")
            return JSON.parse(productList)
        } catch (error) {
            throw new Error("Erro ao ler lista de produtos")
        }
    }

    async getStock() {
        try {
            const productList = await this.findProducts()

            const productStock = productList.map(produto => {
                let stock = {
                    nome: produto.nome,
                    qtde: produto.qtde,
                    preco: produto.preco,
                    valor_stock: produto.qtde * produto.preco
                }
                return stock
            })

            return productStock
        } catch (error) {
            throw new Error(error)
        }
    }

    async getStockValue() {
        const stock = await this.getStock()

        // const stockValue = stock.reduce((acc, atual) => {
        //     return acc + atual.valor_stock

        // }, 0)
        const stockValue = stock.reduce((acc, atual) => {
            acc += atual.valor_stock

            return acc

        }, 0)

        return stockValue
    }


}

export default new ProductService()