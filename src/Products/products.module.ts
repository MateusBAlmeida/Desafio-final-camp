import { Module } from "@nestjs/common";
import { ProductsController } from "./products.controller";
import { ProductsSevice } from "./products.service";

@Module({
    controllers: [ProductsController],
    providers: [ProductsSevice],
})
export class ProductsModule { }