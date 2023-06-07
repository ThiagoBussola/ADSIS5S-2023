import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerMiddleware } from './common/middleware/logger.middleware';

@Module({
  imports: [MongooseModule.forRoot('mongodb://0.0.0.0/nest'), UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes({ path: 'users', method: RequestMethod.GET });
  }
}
