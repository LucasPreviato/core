import { Module } from '@nestjs/common';
import { JobscategoriesService } from './jobscategories.service';
import { JobscategoriesController } from './jobscategories.controller';
import { PrismaJobsCategoriesRepository } from './repositories/prisma/prisma.jobscategories.repository';

@Module({
  controllers: [JobscategoriesController],
  providers: [JobscategoriesService, PrismaJobsCategoriesRepository],
})
export class JobscategoriesModule {}
