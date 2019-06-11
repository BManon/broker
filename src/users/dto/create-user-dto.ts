import { IsArray, IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, Max, Min, ValidateNested } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';


enum Qualification {
  ISO9001,
  ISO14001,
  ISO10303
}

enum Role {
  PRODUCTION,
  TRANSPORT
}

enum Ability {
  ASSEMBLY_ASSISTANT,
  TRANSPORT_COOLING
}

class Address {
  @ApiModelProperty()
  @IsString()
  @IsNotEmpty()
  readonly street: string;

  @ApiModelProperty()
  @Min(0)
  @IsNotEmpty()
  @IsInt()
  readonly number: number;

  @ApiModelProperty()
  @Min(0)
  @Max(99999)
  @IsNotEmpty()
  @IsInt()
  readonly postal_code: number;

  @ApiModelProperty()
  @IsString()
  @IsNotEmpty()
  readonly city: string;
}

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
  readonly company_address: Address;

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