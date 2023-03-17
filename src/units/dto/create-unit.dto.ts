import { IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export interface ICreateUnitDto {
  name: string;
  address?: string;
  number?: string;
  district?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  phone?: string;
  email?: string;
  laboratoryId: string;
}

export class CreateUnitDto implements ICreateUnitDto {
  @IsString()
  @MinLength(3)
  name: string;
  @IsString()
  @IsOptional()
  address?: string;
  @IsString()
  @IsOptional()
  number?: string;
  @IsString()
  @IsOptional()
  district?: string;
  @IsString()
  @IsOptional()
  city?: string;
  @IsString()
  @IsOptional()
  state?: string;
  @IsString()
  @IsOptional()
  zipCode?: string;
  @IsString()
  @IsOptional()
  phone?: string;
  @IsString()
  @IsOptional()
  email?: string;
  @IsString()
  @IsNotEmpty()
  laboratoryId: string;
}
