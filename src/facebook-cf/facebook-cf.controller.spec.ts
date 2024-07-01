import { Test, TestingModule } from '@nestjs/testing';
import { FacebookCfController } from './facebook-cf.controller';
import { FacebookCfService } from './facebook-cf.service';

describe('FacebookCfController', () => {
  let controller: FacebookCfController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FacebookCfController],
      providers: [FacebookCfService],
    }).compile();

    controller = module.get<FacebookCfController>(FacebookCfController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
