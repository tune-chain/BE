import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import {User} from "./user.entity"

@Injectable()
export class UserRepository extends Repository<User>{
    constructor(dataSource: DataSource) {
        super(User, dataSource.createEntityManager());
    }
    
    async findByWalletAddress(walletAddress: string): Promise<User | null> {
        return this.findOne({ where: { walletAddress } });
    }

    async createUser(walletAddress: string): Promise<User> {
        const user = this.create({ walletAddress });
        return this.save(user);
    }
}