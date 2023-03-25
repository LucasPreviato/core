import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

export class CreateJobstitleDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  name: string;
  @IsNotEmpty()
  @IsNumber()
  jobcategoryId: number;
}
