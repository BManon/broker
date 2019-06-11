import { Controller, Get, Param } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {

  constructor(private readonly ordersService: OrdersService) {

  }

  @Get(':order_id/status')
  retrieveStatus(@Param('order_id') order_id: string) {

    this.ordersService.retrieveStatusForOrder(order_id);

  }
}
