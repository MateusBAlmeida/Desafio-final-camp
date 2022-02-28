import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { OrdersModule } from './Orders/orders.module';
import { ProductsModule } from './Products/products.module';
import { UsersModule } from './Users/users.module';

@Module({
  imports: [
    AuthModule, OrdersModule, ProductsModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
