import { Injectable } from '@nestjs/common';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUnitDto } from 'src/units/dto/create-unit.dto';
import { UpdateUnitDto } from 'src/units/dto/update-unit.dto';
import { Unit } from 'src/units/entities/unit.entity';

@Injectable()
export class PrismaUnitsRepository {
  constructor(
    @InjectPinoLogger(PrismaUnitsRepository.name)
    private readonly logger: PinoLogger,
    private readonly prisma: PrismaService,
  ) {}

  async create({
    name,
    address,
    number,
    district,
    city,
    state,
    zipCode,
    phone,
    email,
    laboratoryId,
  }: CreateUnitDto) {
    this.logger.info(`Creating unit in database: ${name}`);
    const newUnit = await this.prisma.unit.create({
      data: {
        name,
        address,
        number,
        district,
        city,
        state,
        zipCode,
        phone,
        email,
        Laboratory: {
          connect: { id: laboratoryId },
        },
      },
    });
    this.logger.info({ message: `Unit created in database: ${name}` });
    return newUnit;
  }

  async findAll(): Promise<Unit[]> {
    this.logger.info('Listing all units found in the database');
    const units = await this.prisma.unit.findMany({ orderBy: { id: 'desc' } });
    this.logger.info({ message: 'All units listed' });
    return units;
  }

  async findOne(id: number): Promise<Unit> {
    this.logger.info(`Listing unit found in the database: ${id}`);
    const unit = await this.prisma.unit.findUnique({
      where: {
        id,
      },
    });
    this.logger.info({ message: `Unit found in database: ${id}` });
    return unit;
  }

  async update(
    id: number,
    {
      name,
      address,
      number,
      district,
      city,
      state,
      zipCode,
      phone,
      email,
    }: UpdateUnitDto,
  ): Promise<Unit> {
    this.logger.info(`Updating unit found in the database: ${id}`);
    const updateUnit = await this.prisma.unit.update({
      where: { id },
      data: {
        name,
        address,
        number,
        district,
        city,
        state,
        zipCode,
        phone,
        email,
      },
    });
    this.logger.info({ message: `Unit updated in database: ${id}` });
    return updateUnit;
  }

  async remove(id: number): Promise<Unit> {
    this.logger.info(`Deleting unit found in the database: ${id}`);
    const deleteUnit = await this.prisma.unit.delete({ where: { id } });
    this.logger.info({ message: `Unit deleted in database: ${id}` });
    return deleteUnit;
  }
}
