import { Injectable } from '@nestjs/common';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateJobstitleDto } from '../dto/create-jobstitle.dto';
import { UpdateJobstitleDto } from '../dto/update-jobstitle.dto';
import { Jobstitle } from '../entities/jobstitle.entity';

@Injectable()
export class PrismaJobTitlesRepository {
  constructor(
    @InjectPinoLogger(PrismaJobTitlesRepository.name)
    private readonly logger: PinoLogger,
    private readonly prisma: PrismaService,
  ) {}

  async create({
    name,
    jobcategoryId,
  }: CreateJobstitleDto): Promise<Jobstitle> {
    this.logger.info('Creating a new job title in the database');
    const jobTitle = await this.prisma.jobTitle.create({
      data: {
        name,
        JobCategory: {
          connect: { id: jobcategoryId },
        },
      },
      include: {
        JobCategory: true,
      },
    });
    this.logger.info('New job title created in the database');
    return jobTitle;
  }

  async findAll(): Promise<Jobstitle[]> {
    this.logger.info('Getting all job titles from the database');
    const jobTitles = await this.prisma.jobTitle.findMany({
      include: {
        JobCategory: true,
      },
    });
    this.logger.info('All job titles retrieved from the database');
    return jobTitles;
  }

  async findOne(id: number): Promise<Jobstitle> {
    this.logger.info('Getting a job title from the database');
    const jobTitle = await this.prisma.jobTitle.findUnique({
      where: { id },
      include: {
        JobCategory: true,
      },
    });
    this.logger.info('Job title retrieved from the database');
    return jobTitle;
  }

  async update(
    id: number,
    { name, jobcategoryId }: UpdateJobstitleDto,
  ): Promise<Jobstitle> {
    this.logger.info('Updating a job title in the database');
    const jobTitle = await this.prisma.jobTitle.update({
      where: { id },
      data: {
        name,
        JobCategory: {
          connect: { id: jobcategoryId },
        },
      },
      include: {
        JobCategory: true,
      },
    });
    this.logger.info('Job title updated in the database');
    return jobTitle;
  }

  async remove(id: number): Promise<Jobstitle> {
    this.logger.info('Deleting a job title from the database');
    const jobTitle = await this.prisma.jobTitle.delete({
      where: { id },
      include: {
        JobCategory: true,
      },
    });
    this.logger.info('Job title deleted from the database');
    return jobTitle;
  }
}
