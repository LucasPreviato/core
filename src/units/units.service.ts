import { Injectable } from '@nestjs/common';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';
import { CreateUnitDto } from './dto/create-unit.dto';
import { UpdateUnitDto } from './dto/update-unit.dto';
import { Unit } from './entities/unit.entity';
import { PrismaUnitsRepository } from './repositories/prisma/prisma.units.repository';

@Injectable()
export class UnitsService {
  constructor(
    @InjectPinoLogger(UnitsService.name)
    private readonly logger: PinoLogger,
    private readonly unitsRepository: PrismaUnitsRepository,
  ) {}

  async create(createUnitDto: CreateUnitDto): Promise<Unit> {
    this.logger.info(`Creating unit: ${createUnitDto.name}`);
    const newUnit = await this.unitsRepository.create(createUnitDto);
    this.logger.info({ message: `Unit created: ${createUnitDto.name}` });
    return newUnit;
  }

  findAll() {
    const units = this.unitsRepository.findAll();
    return units;
  }

  findOne(id: number) {
    return `This action returns a #${id} unit`;
  }

  async update(id: number, updateUnitDto: UpdateUnitDto): Promise<Unit> {
    const updatedUnit = await this.unitsRepository.update(id, updateUnitDto);
    return updatedUnit;
  }

  async remove(id: number): Promise<Unit> {
    const deletedUnit = await this.unitsRepository.remove(id);
    return deletedUnit;
  }
}
