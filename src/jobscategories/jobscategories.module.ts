import { Module } from '@nestjs/common';
import { JobscategoriesService } from './jobscategories.service';
import { JobscategoriesController } from './jobscategories.controller';

@Module({
  controllers: [JobscategoriesController],
  providers: [JobscategoriesService]
})
export class JobscategoriesModule {}
