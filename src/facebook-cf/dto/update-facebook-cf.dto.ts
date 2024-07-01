import { PartialType } from '@nestjs/swagger';
import { CreateFacebookCfDto } from './create-facebook-cf.dto';

export class UpdateFacebookCfDto extends PartialType(CreateFacebookCfDto) {}
