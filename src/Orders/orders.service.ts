import { Injectable } from "@nestjs/common";
import { isNotEmpty } from "class-validator";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { Order } from "./Entity/order.entity";

@Injectable()
export class OrdersService {
    private database: Order[] = [];

    create(CreateOrderDto: CreateOrderDto) {
        const newOrder = {
            id: uuidV4(),
            ...CreateOrderDto,

        };

        this.database.push(newOrder);
        return newOrder;
    }

    findAll(){
        return this.database;
    }

    findOne(id: string){
        return this.database.find((item) => item.id ===id);
    }

    update(id: string, updateOrderDto: UpdateOrderDto){
        const index = this.database.findIndex((item) => item.id === id);
        const order = this.database.find((item) => item.id === id);

        const updateOrder = {
            ...order,
            ...updateOrderDto,
        };

        this.database[index] = updateOrder;

        return this.database[index];
    }

    remove(id: string){
        this.database = this.database.filter((item) => item.id !== id);
    }
}


