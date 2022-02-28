import { Injectable } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { Product } from "./Entity/product.entity";
import { v4 as uuidV4 } from 'uuid'
import { UpdateProductDto } from "./dto/update-product.dto";

@Injectable()
export class ProductsSevice {
    private database: Product[] = [];

    create(createProductDto: CreateProductDto) {
        const newProduct = {
            id: uuidV4(),
            ...createProductDto,
        };

        this.database.push(newProduct);
        return newProduct;
    }

    findAll() {
        return this.database;
    }

    findOne(id: string) {
        return this.database.find((item) => item.id === id);
    }

    update(id: string, updateProductDto: UpdateProductDto): Product {
        const index = this.database.findIndex((item) => item.id === id);
        const product = this.database.find((item) => item.id === id);

        const updateProduct = {
            ...product,
            ...updateProductDto,
        };

        this.database[index] = updateProduct;

        return this.database[index];
    }

    remove(id: string) {
        this.database = this.database.filter((item) => item.id !== id);
    }
}