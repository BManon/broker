import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { SuppliersController } from './suppliers/suppliers.controller';
import { SuppliersService } from './suppliers/suppliers.service';

@Module({
  imports: [UsersModule],
  controllers: [AppController, SuppliersController],
  providers: [AppService, SuppliersService],
})
export class AppModule {}
