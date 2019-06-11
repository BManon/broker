import { Injectable, Logger } from '@nestjs/common';
import { UpdateCapacitiesDto } from './dto/update-capacities-dto';

@Injectable()
export class SuppliersService {

  private readonly logger = new Logger(SuppliersService.name);

  updateCapacities(id: string, updateCapacitiesDto: UpdateCapacitiesDto) {
    this.logger.log(id);
    this.logger.log(updateCapacitiesDto);
  }

  getStatisticsForSupplier(id: string) {
    this.logger.log(id);

    return 'Some crazy statistics'
  }
}
