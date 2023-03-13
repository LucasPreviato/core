import { Inject, Injectable, LoggerService } from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { CreateLaboratoryDto } from './dto/create-laboratory.dto';
import { UpdateLaboratoryDto } from './dto/update-laboratory.dto';
import { Laboratory } from './entities/laboratory.entity';
import { PrismaLaboratoriesRepository } from './repositories/prisma/prisma.laboratories.repository';

@Injectable()
export class LaboratoriesService {
  constructor(
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
    private prismaLaboratoriesRepository: PrismaLaboratoriesRepository,
  ) {}

  async create({
    name,
    nickname,
    cgc,
    IE,
    IM,
    email,
    phone,
    website,
  }: CreateLaboratoryDto): Promise<Laboratory> {
    this.logger.log(`Creating laboratory: ${name}`);
    const laboratory = {
      name,
      nickname,
      cgc,
      IE,
      IM,
      email,
      phone,
      website,
    };
    await this.prismaLaboratoriesRepository.create(laboratory);
    this.logger.log({ message: `Laboratory created: ${name}`, level: 'info' });
    return laboratory;
  }

  async findAll(): Promise<Laboratory[]> {
    this.logger.log(`Finding all laboratories`);
    const laboratories = await this.prismaLaboratoriesRepository.findAll();
    return laboratories;
  }

  async findOne(id: string): Promise<Laboratory> {
    this.logger.log(`Finding laboratory: ${id}`);
    const laboratory = await this.prismaLaboratoriesRepository.findOne(id);
    if (!laboratory) {
      this.logger.error(`Laboratory not found: ${id}`);
      return null;
    }
    return laboratory;
  }

  async update(
    id: string,
    { name, nickname, cgc, IE, IM, email, phone, website }: UpdateLaboratoryDto,
  ): Promise<Laboratory> {
    const laboratory = await this.prismaLaboratoriesRepository.update(id, {
      id,
      name,
      nickname,
      cgc,
      IE,
      IM,
      email,
      phone,
      website,
    });
    return laboratory;
  }

  async remove(id: string): Promise<void> {
    this.logger.log(`Removing laboratory: ${id}`);
    const laboratory = await this.prismaLaboratoriesRepository.findOne(id);
    if (!laboratory) {
      this.logger.error(`Laboratory not found: ${id}`);
      return null;
    }
    await this.prismaLaboratoriesRepository.remove(id);
  }
}
