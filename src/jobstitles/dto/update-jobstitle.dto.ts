import { PartialType } from '@nestjs/mapped-types';
import { CreateJobstitleDto } from './create-jobstitle.dto';

export class UpdateJobstitleDto extends PartialType(CreateJobstitleDto) {}
