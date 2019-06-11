import { Injectable, Logger } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);

  create(user: CreateUserDto) {
      this.logger.log(user);
  }
}
