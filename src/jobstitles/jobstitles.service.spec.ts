import { Test, TestingModule } from '@nestjs/testing';
import { JobstitlesService } from './jobstitles.service';

describe('JobstitlesService', () => {
  let service: JobstitlesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobstitlesService],
    }).compile();

    service = module.get<JobstitlesService>(JobstitlesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
