import { IsOptional, IsString, IsUUID, Length } from 'class-validator';

export class SingleCarDTO {
  @IsString({ message: 'Brand Property Error: Please type brand' })
  @Length(3)
  brand;

  @IsString({ message: 'Model Property Error: Please type model' })
  @Length(3)
  model;

  @IsOptional()
  @IsUUID('4')
  uuid;
}
