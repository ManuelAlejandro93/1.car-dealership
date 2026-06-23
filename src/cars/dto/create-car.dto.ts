import { IsOptional, IsString, IsUUID, Length } from 'class-validator';

export class CreateCarDTO {
  @IsString({ message: 'Brand Property Error: Please type brand' })
  @Length(3)
  private readonly brand;

  @IsString({ message: 'Model Property Error: Please type model' })
  @Length(3)
  private readonly model;

  @IsUUID('4')
  private readonly uuid;
}
