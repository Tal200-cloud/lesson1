import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
    /*
    anyother get route should not be put after Param
    POST /users
    PATCH /users/:id
    */
   @Get() //GET /users
   findAll(@Query('role') role?: 'Intern' | 'Engineer'){
    return []
   }

   @Get('interns')//GET /users/interns
   findAllInterns(){
    return []
   }

   @Get(':id') //Get /user/: id
   findOne(@Param('id') id: string){
    return {id}
   }

   @Post() //post /users
   create(@Body() users: {}) {
    return users
   }

   @Patch(':id') // PATCH /users:/ id
   update(@Param('id') id: string, @Body() usersupdate: {}){
    return {id, ...usersupdate}
   }

   @Delete(':id') //Delete /users/id
   delete(@Param('id') id: string){
    return {id}
   }
}
