import { IsArray, IsDate, IsDateString, IsInt, IsNotEmpty, Max, Min } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';


class DiscountDto {

  @ApiModelProperty({format:'date'})
  @IsDateString()
  @IsNotEmpty()
  readonly date: string;

  @ApiModelProperty()
  @IsInt()
  @Min(-100)
  @Max(100)
  readonly percentage: number;
}

export class UpdateCapacitiesDto {

  @ApiModelProperty()
  @IsInt()
  @IsNotEmpty()
  readonly default_price: number;

  @ApiModelProperty({ type: [DiscountDto] })
  @IsNotEmpty()
  @IsArray()
  readonly discounts: DiscountDto[];
}
