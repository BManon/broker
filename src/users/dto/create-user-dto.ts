import { IsArray, IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, Max, Min, ValidateNested } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
import { CommonAddressDto } from '../../common/dto/common-address-dto';
import { Ability, Machine, Qualification, Role } from '../../common/common_enums';

export class CreateUserDto {
  @ApiModelProperty()
  @IsString()
  @IsNotEmpty()
  readonly username: string;

  @ApiModelProperty()
  @IsString()
  @IsNotEmpty()
  readonly password: string;

  @ApiModelProperty()
  @IsString()
  @IsNotEmpty()
  readonly company_name: string;

  @ApiModelProperty()
  @ValidateNested()
  @IsNotEmpty()
  readonly company_address: CommonAddressDto;

  @ApiModelProperty({enum: Object.keys(Machine).filter(k => Number.isNaN(parseInt(k)))})
  @IsArray()
  readonly machines: Machine[];

  @ApiModelProperty({enum: Object.keys(Qualification).filter(k => Number.isNaN(parseInt(k)))})
  @IsArray()
  readonly qualifications: Qualification[];

  @ApiModelProperty({enum: Object.keys(Role).filter(k => Number.isNaN(parseInt(k)))})
  @IsNotEmpty()
  @IsEnum(Role)
  readonly role: Role;

  @ApiModelProperty({enum: Object.keys(Ability).filter(k => Number.isNaN(parseInt(k)))})
  @IsOptional()
  @IsArray()
  readonly abilities: Ability[]


}