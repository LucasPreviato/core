import { Injectable } from '@nestjs/common';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';
import { CreateJobscategoryDto } from 'src/jobscategories/dto/create-jobscategory.dto';
import { UpdateJobscategoryDto } from 'src/jobscategories/dto/update-jobscategory.dto';
import { Jobscategory } from 'src/jobscategories/entities/jobscategory.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PrismaJobsCategoriesRepository {
  constructor(
    @InjectPinoLogger(PrismaJobsCategoriesRepository.name)
    private readonly logger: PinoLogger,
    private readonly prisma: PrismaService,
  ) {}

  async create({ name }: CreateJobscategoryDto): Promise<Jobscategory> {
    this.logger.info(`Creating jobscategory with name: ${name}`);
    const jobscategory = await this.prisma.jobCategory.create({
      data: {
        name,
      },
    });
    this.logger.info(`Created jobscategory in database with name: ${name}`);
    return jobscategory;
  }
  async findAll(): Promise<Jobscategory[]> {
    this.logger.info('Finding all jobscategories');
    const jobscategories = await this.prisma.jobCategory.findMany();
    this.logger.info('Found all jobscategories');
    return jobscategories;
  }
  async findOne(id: number): Promise<Jobscategory> {
    this.logger.info(`Finding jobscategory with id: ${id}`);
    const jobscategory = await this.prisma.jobCategory.findUnique({
      where: {
        id,
      },
    });
    this.logger.info(`Found jobscategory with id: ${id}`);
    return jobscategory;
  }
  async update(id: number, data: UpdateJobscategoryDto): Promise<Jobscategory> {
    this.logger.info(`Updating jobscategory with id: ${id}`);
    const jobscategory = await this.prisma.jobCategory.update({
      where: {
        id,
      },
      data,
    });
    this.logger.info(`Updated jobscategory with id: ${id}`);
    return jobscategory;
  }
  async remove(id: number): Promise<Jobscategory> {
    this.logger.info(`Removing jobscategory with id: ${id}`);
    const jobscategory = await this.prisma.jobCategory.delete({
      where: {
        id,
      },
    });
    this.logger.info(`Removed jobscategory with id: ${id}`);
    return jobscategory;
  }
}
