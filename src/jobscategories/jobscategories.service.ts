import { Injectable } from '@nestjs/common';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';
import { CreateJobscategoryDto } from './dto/create-jobscategory.dto';
import { UpdateJobscategoryDto } from './dto/update-jobscategory.dto';
import { PrismaJobsCategoriesRepository } from './repositories/prisma/prisma.jobscategories.repository';

@Injectable()
export class JobscategoriesService {
  constructor(
    @InjectPinoLogger(JobscategoriesService.name)
    private readonly logger: PinoLogger,
    private readonly prisma: PrismaJobsCategoriesRepository,
  ) {}

  async create({ name }: CreateJobscategoryDto): Promise<void> {
    this.logger.info(`Creating jobscategory with name: ${name}`);
    const jobscategory = await this.prisma.create({ name });
    this.logger.info(`Created jobscategory in database with name: ${name}`);
  }

  async findAll(): Promise<void> {
    const jobscategories = await this.prisma.findAll();
  }

  async findOne(id: number): Promise<void> {
    this.logger.info(`Finding jobscategory with id: ${id}`);
    const jobscategory = await this.prisma.findOne(id);
    if (!jobscategory) {
      this.logger.error(`Jobscategory with id: ${id} not found`);
      throw new Error(`Jobscategory with id: ${id} not found`);
    }
    this.logger.info(`Found jobscategory with id: ${id}`);
  }

  async update(
    id: number,
    updateJobscategoryDto: UpdateJobscategoryDto,
  ): Promise<void> {
    this.logger.info(`Updating jobscategory with id: ${id}`);
    const jobscategory = await this.prisma.update(id, updateJobscategoryDto);
    if (!jobscategory) {
      this.logger.error(`Jobscategory with id: ${id} not found`);
      throw new Error(`Jobscategory with id: ${id} not found`);
    }
    this.logger.info(`Updated jobscategory with id: ${id}`);
  }

  async remove(id: number): Promise<void> {
    this.logger.info(`Removing jobscategory with id: ${id}`);
    const jobscategory = await this.prisma.remove(id);
    if (!jobscategory) {
      this.logger.error(`Jobscategory with id: ${id} not found`);
      throw new Error(`Jobscategory with id: ${id} not found`);
    }
    this.logger.info(`Removed jobscategory with id: ${id}`);
  }
}
