import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUnitDto } from 'src/units/dto/create-unit.dto';
import { UpdateUnitDto } from 'src/units/dto/update-unit.dto';

@Injectable()
export class PrismaUnitsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUnitDto: CreateUnitDto) {
    const newUnit = await this.prisma.unit.create({
      data: {
        ...createUnitDto,
      },
    });
    return newUnit;
  }

  async findAll() {
    return this.prisma.unit.findMany();
  }

  async findOne(id: number) {
    return this.prisma.unit.findUnique({ where: { id } });
  }

  async update(id: number, updateUnitDto: UpdateUnitDto) {
    return this.prisma.unit.update({
      where: { id },
      data: { ...updateUnitDto },
    });
  }

  async remove(id: number) {
    const deleteUnit = await this.prisma.unit.delete({ where: { id } });
    return deleteUnit;
  }
}
