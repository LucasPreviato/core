import { Module } from '@nestjs/common';
import { JobstitlesService } from './jobstitles.service';
import { JobstitlesController } from './jobstitles.controller';

@Module({
  controllers: [JobstitlesController],
  providers: [JobstitlesService]
})
export class JobstitlesModule {}
