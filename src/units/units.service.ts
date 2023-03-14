import { Inject, Injectable, LoggerService } from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { CreateUnitDto } from './dto/create-unit.dto';
import { UpdateUnitDto } from './dto/update-unit.dto';
import { PrismaUnitsRepository } from './repositories/prisma/prisma.units.repository';

@Injectable()
export class UnitsService {
  constructor(
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
    private readonly unitsRepository: PrismaUnitsRepository,
  ) {}

  async create(createUnitDto: CreateUnitDto) {
    this.logger.log('Creating a new unit');
    const newUnit = await this.unitsRepository.create(createUnitDto);
    this.logger.log({ message: `Unit created: ${newUnit}`, level: 'info' });
    return newUnit;
  }

  findAll() {
    return `This action returns all units`;
  }

  findOne(id: number) {
    return `This action returns a #${id} unit`;
  }

  update(id: number, updateUnitDto: UpdateUnitDto) {
    return `This action updates a #${id} unit`;
  }

  remove(id: number) {
    return `This action removes a #${id} unit`;
  }
}
