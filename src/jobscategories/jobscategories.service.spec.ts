import { Test, TestingModule } from '@nestjs/testing';
import { JobscategoriesService } from './jobscategories.service';

describe('JobscategoriesService', () => {
  let service: JobscategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobscategoriesService],
    }).compile();

    service = module.get<JobscategoriesService>(JobscategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
