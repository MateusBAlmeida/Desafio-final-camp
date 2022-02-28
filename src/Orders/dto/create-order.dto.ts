import { IsNotEmpty, IsString } from "class-validator";
import { Product } from "src/Products/Entity/product.entity";
import { User } from "src/Users/Entity/user.entity";

export class CreateOrderDto {

    client: User['id'];

    @IsString()
    @IsNotEmpty()
    address: string;

    items: Product['id'];


}