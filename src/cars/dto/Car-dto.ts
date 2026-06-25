import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  Length,
} from 'class-validator';

export class CarDTO {
  @IsString({ message: 'Brand Property Error: Please type brand' })
  @IsNotEmpty()
  @Length(3, 50)
  brand: string;

  @IsString({ message: 'Model Property Error: Please type model' })
  @IsNotEmpty()
  @Length(3)
  model: string;

  @IsNotEmpty()
  @IsUUID('4')
  @IsOptional()
  uuid: string;
}
