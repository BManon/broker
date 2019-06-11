import { Injectable } from '@nestjs/common';
import { RequestOffersDto } from './dto/request-offers-dto';

@Injectable()
export class OffersService {
  findAllOffers(requestOffersDto: RequestOffersDto) {

  }

  acceptOffer(offer_id: string) {
    return undefined;
  }
}
