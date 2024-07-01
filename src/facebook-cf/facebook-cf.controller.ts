import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FacebookCfService } from './facebook-cf.service';
import { CreateFacebookCfDto } from './dto/create-facebook-cf.dto';
import { UpdateFacebookCfDto } from './dto/update-facebook-cf.dto';

@Controller('facebook-cf')
export class FacebookCfController {
  constructor(private readonly facebookCfService: FacebookCfService) {
    //
  }

  @Post()
  create(@Body() createFacebookCfDto: CreateFacebookCfDto) {
    return this.facebookCfService.create(createFacebookCfDto);
  }

  @Get()
  findAll() {
    return this.facebookCfService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.facebookCfService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFacebookCfDto: UpdateFacebookCfDto,
  ) {
    return this.facebookCfService.update(+id, updateFacebookCfDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.facebookCfService.remove(+id);
  }
}
