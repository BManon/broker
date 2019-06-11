import { Body, Controller, Get, Post } from '@nestjs/common';
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


}
