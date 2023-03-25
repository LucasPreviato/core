import { Injectable } from '@nestjs/common';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';
import { CreateJobstitleDto } from './dto/create-jobstitle.dto';
import { UpdateJobstitleDto } from './dto/update-jobstitle.dto';
import { PrismaJobTitlesRepository } from './repositories/prisma.jobstitles.repository';

@Injectable()
export class JobstitlesService {
  constructor(
    @InjectPinoLogger(JobstitlesService.name)
    private readonly logger: PinoLogger,
    private readonly prisma: PrismaJobTitlesRepository,
  ) {}
  async create({ name, jobcategoryId }: CreateJobstitleDto): Promise<void> {
    this.logger.info('Creating a new job title');
    await this.prisma.create({ name, jobcategoryId });
    this.logger.info('New job title created');
  }

  async findAll(): Promise<void> {
    this.logger.info('Getting all job titles');
    await this.prisma.findAll();
    this.logger.info('All job titles retrieved');
  }

  async findOne(id: number): Promise<void> {
    this.logger.info('Getting a job title');
    if (!id) {
      throw new Error('id not found');
    }
    await this.prisma.findOne(id);
  }

  async update(id: number, { name, jobcategoryId }: UpdateJobstitleDto) {
    this.logger.info('Updating a job title');
    if (!id) {
      throw new Error('id not found');
    }
    await this.prisma.update(id, { name, jobcategoryId });
  }

  async remove(id: number) {
    this.logger.info('Removing a job title');
    if (!id) {
      throw new Error('id not found');
    }
    await this.prisma.remove(id);
  }
}
