import { PrismaService } from "src/prisma/prisma.service";


export class PrismaJobTitlesRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateJobTitleDto): Promise<JobTitle> {
    const jobTitle = await this.prisma.jobTitle.create({ data });
    return jobTitle;
  }

  async findAll(): Promise<JobTitle[]> {
    const jobTitles = await this.prisma.jobTitle.findMany();
    return jobTitles;
  }

  async findOne(id: number): Promise<JobTitle> {
    const jobTitle = await this.prisma.jobTitle.findUnique({
      where: { id },
    });
    return jobTitle;
  }

  async update(id: number, data: UpdateJobTitleDto): Promise<JobTitle> {
    const jobTitle = await this.prisma.jobTitle.update({
      where: { id },
      data,
    });
    return jobTitle;
  }

  async remove(id: number): Promise<JobTitle> {
    const jobTitle = await this.prisma.jobTitle.delete({
      where: { id },
    });
    return jobTitle;
  }
}