import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';
import { CreateDepartmentDto } from 'src/departments/dto/create-department.dto';
import { Department } from 'src/departments/entities/department.entity';
import { UpdateDepartmentDto } from 'src/departments/dto/update-department.dto';

@Injectable()
export class PrismaDepartmentsRepository {
  constructor(
    @InjectPinoLogger(PrismaDepartmentsRepository.name)
    private readonly logger: PinoLogger,
    private readonly prisma: PrismaService,
  ) {}
  async create({ name, abbreviation, unitId }: CreateDepartmentDto) {
    this.logger.info(`Creating department in database: ${name}`);
    const newDepartment = await this.prisma.department.create({
      data: {
        name,
        abbreviation,
        Unit: {
          connect: {
            id: unitId,
          },
        },
      },
    });
    this.logger.info({ message: `Department created in database: ${name}` });
    return newDepartment;
  }
  async findAll(): Promise<Department[]> {
    this.logger.info('Listing all departments found in the database');
    const departments = await this.prisma.department.findMany({
      orderBy: { id: 'desc' },
      include: {
        Unit: true,
      },
    });
    this.logger.info({ message: 'All departments listed' });
    return departments;
  }
  async findOne(id: number): Promise<Department> {
    this.logger.info(`Listing department found in the database: ${id}`);
    const department = await this.prisma.department.findUnique({
      where: {
        id,
      },
      include: {
        Unit: true,
      },
    });
    this.logger.info({ message: 'Department listed' });
    return department;
  }
  async update(
    id: number,
    { name, abbreviation, unitId }: UpdateDepartmentDto,
  ): Promise<Department> {
    this.logger.info(`Updating department in database: ${name}`);
    const updatedDepartment = await this.prisma.department.update({
      where: {
        id: unitId,
      },
      data: {
        name,
        abbreviation,
        Unit: {
          connect: {
            id: unitId,
          },
        },
      },
      include: {
        Unit: true,
      },
    });
    this.logger.info({ message: `Department updated in database: ${name}` });
    return updatedDepartment;
  }
  async remove(id: number) {
    this.logger.info(`Removing department in database: ${id}`);
    const deletedDepartment = await this.prisma.department.delete({
      where: {
        id,
      },
    });
    this.logger.info({ message: `Department removed in database: ${id}` });
    return deletedDepartment;
  }
}
