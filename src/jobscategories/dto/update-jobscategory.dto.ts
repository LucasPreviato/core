import { PartialType } from '@nestjs/mapped-types';
import { CreateJobscategoryDto } from './create-jobscategory.dto';

export class UpdateJobscategoryDto extends PartialType(CreateJobscategoryDto) {}
