import { IsNotEmpty, IsString } from 'class-validator';

export class FacebookCallbackDto {
  // code, role, redirectUri
  @IsNotEmpty()
  @IsString()
  code: string;

  @IsNotEmpty()
  @IsString()
  redirectUri: string;
}
