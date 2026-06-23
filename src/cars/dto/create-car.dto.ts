import { IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateCarDTO {
  @IsString({ message: 'Brand Property Error: Please type brand' })
  private readonly brand;
  @IsString({ message: 'Model Property Error: Please type model' })
  private readonly model;
  @IsString({ message: 'UUID Property Error: Please type uuid' })
  private readonly uuid;
}
