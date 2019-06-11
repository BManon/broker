import { ApiModelProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString, Max, Min } from 'class-validator';

export class CommonAddressDto {
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
