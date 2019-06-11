import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { SuppliersModule } from './suppliers/suppliers.module';
import { OffersModule } from './offers/offers.module';

@Module({
  imports: [UsersModule, SuppliersModule, OffersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
