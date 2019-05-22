import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {

  private readonly users: User[] = [];

  create(user: User) {
    this.users.push(user);
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: string) {
    return this.users[id];
  }

  update(id: string, user:User) {
    this.users[id] = user;
  }

  delete(id: string) {
    delete this.users[id];
  }
}
