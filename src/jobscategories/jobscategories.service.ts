import { Injectable } from '@nestjs/common';
import { CreateJobscategoryDto } from './dto/create-jobscategory.dto';
import { UpdateJobscategoryDto } from './dto/update-jobscategory.dto';

@Injectable()
export class JobscategoriesService {
  create(createJobscategoryDto: CreateJobscategoryDto) {
    return 'This action adds a new jobscategory';
  }

  findAll() {
    return `This action returns all jobscategories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} jobscategory`;
  }

  update(id: number, updateJobscategoryDto: UpdateJobscategoryDto) {
    return `This action updates a #${id} jobscategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} jobscategory`;
  }
}
