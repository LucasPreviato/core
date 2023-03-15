import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUnitDto } from 'src/units/dto/create-unit.dto';
import { UpdateUnitDto } from 'src/units/dto/update-unit.dto';
import { Unit } from 'src/units/entities/unit.entity';

@Injectable()
export class PrismaUnitsRepository {
  constructor(private readonly prisma: PrismaService) {}

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
    return newUnit;
  }

  async findAll(): Promise<Unit[]> {
    const units = await this.prisma.unit.findMany();
    return units;
  }

  async findOne(id: number): Promise<Unit> {
    const unit = await this.prisma.unit.findUnique({ where: { id } });
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
  ) {
    return this.prisma.unit.update({
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
  }

  async remove(id: number): Promise<Unit> {
    const deleteUnit = await this.prisma.unit.delete({ where: { id } });
    return deleteUnit;
  }
}
