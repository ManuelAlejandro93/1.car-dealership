import { IsOptional, IsString, IsUUID, Length } from 'class-validator';

export class UpdateCarDTO {
  @IsOptional()
  @IsString({ message: 'Brand Property Error: Please type brand' })
  @Length(3)
  private readonly brand;

  @IsOptional()
  @IsString({ message: 'Model Property Error: Please type model' })
  @Length(3)
  private readonly model;

  @IsOptional()
  @IsUUID('4')
  private readonly uuid;
}
