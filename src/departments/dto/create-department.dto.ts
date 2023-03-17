import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsOptional,
  MinLength,
} from 'class-validator';

export class CreateDepartmentDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsOptional()
  @MinLength(3)
  abbreviation?: string;
  @IsNumber()
  @IsNotEmpty()
  unitId: number;
}
