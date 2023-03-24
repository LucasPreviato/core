import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JobscategoriesService } from './jobscategories.service';
import { CreateJobscategoryDto } from './dto/create-jobscategory.dto';
import { UpdateJobscategoryDto } from './dto/update-jobscategory.dto';

@Controller('jobscategories')
export class JobscategoriesController {
  constructor(private readonly jobscategoriesService: JobscategoriesService) {}

  @Post()
  create(@Body() createJobscategoryDto: CreateJobscategoryDto) {
    return this.jobscategoriesService.create(createJobscategoryDto);
  }

  @Get()
  findAll() {
    return this.jobscategoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jobscategoriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJobscategoryDto: UpdateJobscategoryDto) {
    return this.jobscategoriesService.update(+id, updateJobscategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jobscategoriesService.remove(+id);
  }
}
