import { Injectable } from '@nestjs/common';
import { CreateFacebookCfDto } from './dto/create-facebook-cf.dto';
import { UpdateFacebookCfDto } from './dto/update-facebook-cf.dto';
// import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class FacebookCfService {
  create(createFacebookCfDto: CreateFacebookCfDto) {
    console.log(createFacebookCfDto);
    return 'This action adds a new facebookCf';
  }

  findAll() {
    return `This action returns all facebookCf`;
  }

  findOne(id: number) {
    return `This action returns a #${id} facebookCf`;
  }

  update(id: number, updateFacebookCfDto: UpdateFacebookCfDto) {
    console.log(updateFacebookCfDto);
    return `This action updates a #${id} facebookCf`;
  }

  remove(id: number) {
    return `This action removes a #${id} facebookCf`;
  }
}
