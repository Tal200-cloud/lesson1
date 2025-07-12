import { Injectable } from '@nestjs/common';
import { createUserDto } from './dto/create_user.dto';
import { updateUserDto } from './dto/update_user.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        {
            "id": 1,
            "name": "Leanne Graham",
            "email": "sincere@availableParallelism.biz",
            "role": "INTERN"
        },{
            "id": 2,
            "name": "Ervin Howell",
            "email": "howell@ervin.tv",
            "role": "INTERN"
        },{
            "id": 3,
            "name": "Clementina Bank",
            "email": "bank@clementina.net",
            "role": "ENGINEER"
        },{
            "id": 4,
            "name": "Patricia LUU",
            "email": "luu@patricia.key.org",
            "role": "ENGINEER"
        },{
            "id": 5,
            "name": "Chelsey Dietrich",
            "email": "dietrach@chelsey.com",
            "role": "ADMIN"
        }
    ]

    findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN'){
        if (role){
            const roleArray = this.users.filter(user => user.role === role)
            if (!roleArray.length) throw new 
            NotFoundException('User Role Not Found')
            return roleArray

        }
        return this.users
    }

    findOne(id: number){
        const user = this.users.find(user => user.id === id)
        if (!user) throw new NotFoundException('User Not Found')
        return user
    }

    create(CreateUserDto: createUserDto){
        const userByHIghestId = [...this.users].sort((a, b) => b.id - a.id)
        const newUser = {
            id: userByHIghestId[0].id + 1,
            ...CreateUserDto
        }
        this.users.push(newUser)
        return newUser
    }

    update(id: number, UpdatedUserDto: updateUserDto){
        this.users = this.users.map(user => {
            if(user.id === id){
                return { ...user, ...UpdatedUserDto}
            }
            return user
        })
        return this.findOne(id)
    }

    delete(id: number){
        const removedUser = this.findOne(id)

        this.users = this.users.filter(user => user.id !== id)

        return removedUser
    }
}
