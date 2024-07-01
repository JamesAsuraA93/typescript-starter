import { Test, TestingModule } from '@nestjs/testing';
import { FacebookCfService } from './facebook-cf.service';

describe('FacebookCfService', () => {
  let service: FacebookCfService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FacebookCfService],
    }).compile();

    service = module.get<FacebookCfService>(FacebookCfService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
