import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './entities/product.entity'
import { Model } from 'mongoose'

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product.name) private productModel: Model<Product>) {}
  
  create(createProductDto: CreateProductDto) {
    const createProduct = this.productModel.create(createProductDto);
    return createProduct;
  }

  findAll() {
    const findedProducts = this.productModel.find();
    return findedProducts;
  }

  findOne(id: string) {
    const findedProduct = this.productModel.findById(id);
    return findedProduct;
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    const updateProduct = this.productModel.findByIdAndUpdate(
      id,
      {
        name: updateProductDto.name,
        price: updateProductDto.price,
        quantity: updateProductDto.quantity
      },
      {
        new: true
      },
    )

    return updateProduct;
  }

  remove(id: number) {
    const deletedProduct = this.productModel.findByIdAndDelete(id)
    return deletedProduct;
  }
}
