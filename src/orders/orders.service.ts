import { Injectable } from '@nestjs/common';

@Injectable()
export class OrdersService {
  retrieveStatusForOrder(order_id: string) {
    return 'Some crazy order status';
  }
}
