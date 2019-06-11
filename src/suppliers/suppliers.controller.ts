import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { UpdateCapacitiesDto } from './dto/update-capacities-dto';
import { SuppliersService } from './suppliers.service';

@Controller('suppliers')
export class SuppliersController {
  constructor(private readonly suppliersService: SuppliersService) {
  }

  @Put(':supplier_id/capacities')
  async updateCapacities(@Param('supplier_id') id, @Body() updateCapacitiesDto: UpdateCapacitiesDto) {
    return this.suppliersService.updateCapacities(id, updateCapacitiesDto);
  }

  @Get(':supplier_id/statistics')
  async getStatistics(@Param('supplier_id') id) {
    return this.suppliersService.getStatisticsForSupplier(id);
  }

}
