import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { createUserDto } from './dto/create_user.dto';
import { updateUserDto } from './dto/update_user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get() // GET /users?role=ENGINEER
    findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return this.usersService.findAll(role);
    }

   @Get(':id') //Get /user/: id
   findOne(@Param('id', ParseIntPipe) id: number){
    return this.usersService.findOne(id)
   }

   @Post() //post /users
   create(@Body(ValidationPipe) CreateUserDto: createUserDto) {
    return this.usersService.create(CreateUserDto)
   }

   @Patch(':id') // PATCH /users:/ id
   update(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) UpdateUserDto: updateUserDto){
    return this.usersService.update(id, UpdateUserDto)
   }

   @Delete(':id') //Delete /users/id
   delete(@Param('id', ParseIntPipe) id: number){
    return this.usersService.delete(id)
   }
}
