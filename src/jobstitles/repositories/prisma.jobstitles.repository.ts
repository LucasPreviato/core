import { PrismaService } from 'src/prisma/prisma.service';
import { CreateJobstitleDto } from '../dto/create-jobstitle.dto';
import { UpdateJobstitleDto } from '../dto/update-jobstitle.dto';
import { Jobstitle } from '../entities/jobstitle.entity';

export class PrismaJobTitlesRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateJobstitleDto): Promise<Jobstitle> {
    const jobTitle = await this.prisma.jobTitle.create({ data });
    return jobTitle;
  }

  async findAll(): Promise<Jobstitle[]> {
    const jobTitles = await this.prisma.jobTitle.findMany();
    return jobTitles;
  }

  async findOne(id: number): Promise<Jobstitle> {
    const jobTitle = await this.prisma.jobTitle.findUnique({
      where: { id },
    });
    return jobTitle;
  }

  async update(id: number, data: UpdateJobstitleDto): Promise<Jobstitle> {
    const jobTitle = await this.prisma.jobTitle.update({
      where: { id },
      data,
    });
    return jobTitle;
  }

  async remove(id: number): Promise<Jobstitle> {
    const jobTitle = await this.prisma.jobTitle.delete({
      where: { id },
    });
    return jobTitle;
  }
}
