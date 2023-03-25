import { Test, TestingModule } from '@nestjs/testing';
import { JobstitlesController } from './jobstitles.controller';
import { JobstitlesService } from './jobstitles.service';

describe('JobstitlesController', () => {
  let controller: JobstitlesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JobstitlesController],
      providers: [JobstitlesService],
    }).compile();

    controller = module.get<JobstitlesController>(JobstitlesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
