import { Injectable, Logger } from '@nestjs/common';
import { UpdateCapacitiesDto } from './dto/update-capacities-dto';

@Injectable()
export class SuppliersService {

  private readonly logger = new Logger(SuppliersService.name);

  updateCapacities(updateCapacitiesDto: UpdateCapacitiesDto) {
    this.logger.log(updateCapacitiesDto)
  }

}
