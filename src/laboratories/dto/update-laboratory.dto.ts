import { CreateLaboratoryDto } from './create-laboratory.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateLaboratoryDto extends PartialType(CreateLaboratoryDto) {
  id: number;
}
