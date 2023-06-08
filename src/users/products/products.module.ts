import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Product, ProductSchema } from './entities/product.entity';

@Module({
  imports:[MongooseModule.forFeature([{name: Product.name, schema: ProductSchema}])],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}