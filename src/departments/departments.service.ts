import { Injectable } from '@nestjs/common';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { PrismaDepartmentsRepository } from './repositories/prisma/prisma.departments.repository';

@Injectable()
export class DepartmentsService {
  constructor(
    @InjectPinoLogger(DepartmentsService.name)
    private readonly logger: PinoLogger,
    private readonly prismaDepartmentsRepository: PrismaDepartmentsRepository,
  ) {}
  async create(createDepartmentDto: CreateDepartmentDto) {
    this.logger.info(`Creating department: ${createDepartmentDto.name}`);
    const newUnit = await this.prismaDepartmentsRepository.create(
      createDepartmentDto,
    );
    this.logger.info({ message: `Department created: ${newUnit}` });
    return newUnit;
  }

  async findAll() {
    this.logger.info('Listing all departments');
    const departments = await this.prismaDepartmentsRepository.findAll();
    this.logger.info({ message: 'All departments listed' });
    return departments;
  }

  async findOne(id: number) {
    this.logger.info(`Listing department: ${id}`);
    const department = this.prismaDepartmentsRepository.findOne(id);
    this.logger.info({ message: 'Department listed' });
    return department;
  }

  async update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    this.logger.info(`Updating department: ${id}`);
    const department = await this.prismaDepartmentsRepository.update(
      id,
      updateDepartmentDto,
    );
    this.logger.info({ message: 'Department updated' });
    return department;
  }

  async remove(id: number) {
    this.logger.info(`Removing department: ${id}`);
    const department = await this.prismaDepartmentsRepository.remove(id);
    this.logger.info({ message: 'Department removed' });
    return department;
  }
}
