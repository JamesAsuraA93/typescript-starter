import { Module } from '@nestjs/common';
import { FacebookCfService } from './facebook-cf.service';
import { FacebookCfController } from './facebook-cf.controller';

@Module({
  controllers: [FacebookCfController],
  providers: [FacebookCfService],
})
export class FacebookCfModule {}
