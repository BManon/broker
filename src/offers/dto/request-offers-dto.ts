import { CommonAddressDto } from '../../common/dto/common-address-dto';
import {
  IsArray,
  IsDateString,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { Ability, Qualification } from '../../common/common_enums';


class QualityMeasurementDto {
  readonly toBeDefined: string;
}

export class RequestOffersDto {

  @ApiModelProperty()
  @IsNotEmpty()
  @IsString()
  readonly company_name: string;

  @ApiModelProperty()
  @ValidateNested()
  @IsNotEmpty()
  readonly delivery_address: CommonAddressDto;

  @ApiModelProperty()
  @IsNotEmpty()
  @IsString()
  readonly product_id: string;

  @ApiModelProperty()
  @IsNotEmpty()
  @IsInt()
  readonly amount: number;

  @ApiModelProperty({ format: 'date' })
  @IsNotEmpty()
  @IsDateString()
  readonly delivery_date: string;

  @ApiModelProperty()
  @IsNotEmpty()
  readonly max_price: number;

  @ApiModelProperty()
  @IsNotEmpty()
  readonly min_rating: number;


  @ApiModelProperty({enum: Object.keys(Qualification).filter(k => Number.isNaN(parseInt(k)))})
  @IsNotEmpty()
  @IsEnum(Qualification)
  @IsArray()
  readonly required_qualifications: string[];

  @ApiModelProperty({enum: Object.keys(Ability).filter(k => Number.isNaN(parseInt(k)))})
  @IsNotEmpty()
  @IsEnum(Ability)
  @IsArray()
  readonly required_abilities: string[];

  @ApiModelPropertyOptional()
  @ValidateNested()
  @IsOptional()
  readonly quality_measurements: QualityMeasurementDto;


}
