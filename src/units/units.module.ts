import { Module } from '@nestjs/common';
import { UnitsService } from './units.service';
import { UnitsController } from './units.controller';
import { PrismaUnitsRepository } from './repositories/prisma/prisma.units.repository';

@Module({
  controllers: [UnitsController],
  providers: [UnitsService, PrismaUnitsRepository],
})
export class UnitsModule {}
