import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JobstitlesService } from './jobstitles.service';
import { CreateJobstitleDto } from './dto/create-jobstitle.dto';
import { UpdateJobstitleDto } from './dto/update-jobstitle.dto';

@Controller('jobstitles')
export class JobstitlesController {
  constructor(private readonly jobstitlesService: JobstitlesService) {}

  @Post()
  create(@Body() createJobstitleDto: CreateJobstitleDto) {
    return this.jobstitlesService.create(createJobstitleDto);
  }

  @Get()
  findAll() {
    return this.jobstitlesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jobstitlesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJobstitleDto: UpdateJobstitleDto) {
    return this.jobstitlesService.update(+id, updateJobstitleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jobstitlesService.remove(+id);
  }
}
