import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService{
    constructor(private readonly userRepository : UserRepository) {}

    async findOrCreateUser (walletAddress : string){
        const user = await this.userRepository.findOne({ where: { walletAddress } });
        if (user) return user;

        return await this.userRepository.save({ walletAddress });
    }
}
