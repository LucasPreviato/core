import { Module } from '@nestjs/common';
import { LaboratoriesService } from './laboratories.service';
import { LaboratoriesController } from './laboratories.controller';
import { PrismaLaboratoriesRepository } from './repositories/prisma/prisma.laboratories.repository';
@Module({
  providers: [LaboratoriesService, PrismaLaboratoriesRepository],
  controllers: [LaboratoriesController],
})
export class LaboratoriesModule {}
