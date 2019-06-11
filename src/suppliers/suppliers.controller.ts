import { Body, Controller, Put } from '@nestjs/common';
import { UpdateCapacitiesDto } from './dto/update-capacities-dto';
import { SuppliersService } from './suppliers.service';

@Controller('suppliers')
export class SuppliersController {
  constructor(private readonly suppliersService: SuppliersService) {
  }

  @Put()
  async create(@Body() updateCapacitiesDto: UpdateCapacitiesDto) {
    this.suppliersService.updateCapacities(updateCapacitiesDto);
  }

}
