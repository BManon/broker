import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OffersService } from './offers.service';
import { RequestOffersDto } from './dto/request-offers-dto';

@Controller('offers')
export class OffersController {

  constructor(private readonly offersService: OffersService) {

  }

  @Post('/request')
  async findAllOffers(@Body() requestOffersDto: RequestOffersDto) {

    return this.offersService.findAllOffers(requestOffersDto);
  }

  @Post(':offer_id/accept')
  async acceptOffer(@Param('offer_id') offer_id: string) {

    return this.offersService.acceptOffer(offer_id)
  }


}
