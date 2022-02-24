import { Product } from "../../Products/Entity/product.entity";
import { User } from "../../Users/Entity/user.entity";

export class Order {
    id: string;
    client: User;
    address: string;
    items: Product[];
}