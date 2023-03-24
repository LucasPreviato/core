import { Test, TestingModule } from '@nestjs/testing';
import { JobscategoriesController } from './jobscategories.controller';
import { JobscategoriesService } from './jobscategories.service';

describe('JobscategoriesController', () => {
  let controller: JobscategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JobscategoriesController],
      providers: [JobscategoriesService],
    }).compile();

    controller = module.get<JobscategoriesController>(JobscategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
