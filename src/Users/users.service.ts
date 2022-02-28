import { Injectable } from "@nestjs/common";
import { v4 as uuidV4 } from "uuid";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./Entity/user.entity";

@Injectable()
export class UsersService {
    private database: User[] = [];


    create(createUserDto: CreateUserDto) {
        const newUser = {
            id: uuidV4(),
            ...createUserDto,
        };

        this.database.push(newUser);
        return newUser;
    }

    findAll() {
        return this.database;
    }

    findOne(id: string) {
        return this.database.find((item) => item.id === id);
    }

    getByEmail(email: string) {
        return this.database.find((item) => item.email === email);
    }

    update(id: string, updateUserDto: UpdateUserDto) {
        const index = this.database.findIndex((item) => item.id === id);
        const user = this.database.find((item) => item.id === id);

        const updateUser = {
            ...user,
            ...updateUserDto,
        };

        this.database[index] = updateUser;

        return this.database[index];
    }

    remove(id: string) {
        this.database = this.database.filter((item) => item.id !== id);
    }
}