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
    this.logger.info('Listing all units');
    const units = this.unitsRepository.findAll();
    this.logger.info({ message: 'All units listed' });
    return units;
  }

  findOne(id: number) {
    this.logger.info(`Listing unit: ${id}`);
    const unit = this.unitsRepository.findOne(id);
    this.logger.info({ message: `Unit listed: ${id}` });
    return unit;
  }

  async update(id: number, updateUnitDto: UpdateUnitDto): Promise<Unit> {
    this.logger.info(`Updating unit: ${id}`);
    const updatedUnit = await this.unitsRepository.update(id, updateUnitDto);
    this.logger.info({ message: `Unit updated: ${id}` });
    return updatedUnit;
  }

  async remove(id: number): Promise<Unit> {
    this.logger.info(`Deleting unit: ${id}`);
    const deletedUnit = await this.unitsRepository.remove(id);
    this.logger.info({ message: `Unit deleted: ${id}` });
    return deletedUnit;
  }
}
