import { Injectable } from '@nestjs/common';
import { CreateJobstitleDto } from './dto/create-jobstitle.dto';
import { UpdateJobstitleDto } from './dto/update-jobstitle.dto';

@Injectable()
export class JobstitlesService {
  create(createJobstitleDto: CreateJobstitleDto) {
    return 'This action adds a new jobstitle';
  }

  findAll() {
    return `This action returns all jobstitles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} jobstitle`;
  }

  update(id: number, updateJobstitleDto: UpdateJobstitleDto) {
    return `This action updates a #${id} jobstitle`;
  }

  remove(id: number) {
    return `This action removes a #${id} jobstitle`;
  }
}
