import BookModel from './book.schema'

export class BookService {
    async create(book: any) {
        const createdBook = await BookModel.create(book)
        return createdBook
    }

    async find() {
        const findedBook = await BookModel.find()
    
        return findedBook
    }
}