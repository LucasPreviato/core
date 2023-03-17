import { Module } from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { DepartmentsController } from './departments.controller';
import { PrismaDepartmentsRepository } from './repositories/prisma/prisma.departments.repository';

@Module({
  controllers: [DepartmentsController],
  providers: [DepartmentsService, PrismaDepartmentsRepository],
})
export class DepartmentsModule {}
