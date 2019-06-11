import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { SuppliersModule } from './suppliers/suppliers.module';
import { OffersModule } from './offers/offers.module';
import { CommonModule } from './common/common.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [UsersModule, SuppliersModule, OffersModule, CommonModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
