import { IsNotEmpty, IsString, IsUUID, Length } from 'class-validator';

export class CarDTO {
  @IsString({ message: 'Brand Property Error: Please type brand' })
  @IsNotEmpty()
  @Length(3, 50)
  brand;

  @IsString({ message: 'Model Property Error: Please type model' })
  @IsNotEmpty()
  @Length(3)
  model;

  @IsNotEmpty()
  @IsUUID('4')
  uuid;
}
