import { Body, Controller, Delete, Get, Logger, Param, Post, Put, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';
import { UpdateUserDto } from './dto/update-user-dto';
import { QueryAllUsers } from './dto/query-all-users';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {
  }

  // @Get()
  // async findAll(@Query() query: QueryAllUsers) {
  //   return this.usersService.findAll()
  // }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    this.usersService.create(createUserDto);
  }

  // @Get(':id')
  // async findOne(@Param('id') id) {
  //   return this.usersService.findOne(id);
  // }

  // @Put(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usersService.delete(id);
  // }
}
