import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express'; // Import the Request type from express
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {
    //
  }

  @Get('/facebook')
  @UseGuards(AuthGuard('facebook'))
  async facebookLogin(): Promise<any> {
    return HttpStatus.OK;
  }

  @Get('/facebook/callback')
  // AQAe5t4CNh1XANKWojDcUg7_7-kT3rgdkBatA9ZefVHZe0INIz2ZsizdOQIYLW8eK5GGA767oliCe8Hu - wvYdjfGsz2fsEsr0kR7ScuiBZAHpqlyv8A - 46xBn9PNvH - 0RJKy67DQL4wdJRq03kQQY5BAR83j0lSe3cOZTWO3PFJ0MdyKHawEfeMKLlht6cWZcobpKpi77IZ7gXP7swnJrCzeXFo6BcYESOdi8njDpNa8jg7AjeeuUh5yIgua4KLvBcfs4fRlw21mBZS4_6TipcMknnVegFsrzYRryYxwkcQKF50ddEHtMnAfaK4JVwiMCVtavEVkdWvQGH_EgKYnfh332EoCkuPScjboXZuL_kvC0IgyCH7YK - mCU1Qnn39XsB4NQb7RQwFxCuRqJcHHS1FP#_ = _
  // @UseGuards(AuthGuard('facebook'))
  async facebookLoginCallback(
    @Req() req: Request,
    // @Param() code: string,
    // @Param() redirectUri: string,
  ): Promise<any> {
    // console.log(code);
    // console.log(redirectUri);
    const { code, redirectUri } = req.query;
    // console.log(code, redirectUri);

    const response = await this.authService.facebookGetDataByCode({
      code: code as string,
      redirectUri: redirectUri as string,
    });

    console.log(response);

    return response;

    // AQAe5t4CNh1XANKWojDcUg7_7 - kT3rgdkBatA9ZefVHZe0INIz2ZsizdOQIYLW8eK5GGA767oliCe8Hu - wvYdjfGsz2fsEsr0kR7ScuiBZAHpqlyv8A - 46xBn9PNvH - 0RJKy67DQL4wdJRq03kQQY5BAR83j0lSe3cOZTWO3PFJ0MdyKHawEfeMKLlht6cWZcobpKpi77IZ7gXP7swnJrCzeXFo6BcYESOdi8njDpNa8jg7AjeeuUh5yIgua4KLvBcfs4fRlw21mBZS4_6TipcMknnVegFsrzYRryYxwkcQKF50ddEHtMnAfaK4JVwiMCVtavEVkdWvQGH_EgKYnfh332EoCkuPScjboXZuL_kvC0IgyCH7YK - mCU1Qnn39XsB4NQb7RQwFxCuRqJcHHS1FP#_ = _
    // req.user as any
    // "user": {
    //   "email": "
    // return {
    //   statusCode: HttpStatus.OK,
    //   data: req.user as any,
    // };
  }

  @Get('/facebook/redirect')
  @UseGuards(AuthGuard('facebook'))
  async facebookLoginRedirect(@Req() req: Request): Promise<any> {
    // req.user as any
    // "user": {
    //   "email": "bem3145@gmail.com",
    //     "firstName": "ธีรภัทร",
    //       "lastName": "สุภาศรี",
    //         "picture": "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2102192966832780&height=50&width=50&ext=1722403225&hash=AbZ9bWMKWtCkZ3gX6Y9ymkoe",
    //           "account_id": "2102192966832780"
    // },
    // "accessToken": "EAAG1Gnel7ZAwBOZCgrRcZCfbnZAs7Jl6m1eBLUP97KQ9MgAcnW0O9JZBxax9nZBrH4Vw7Y1DZCfviHZCDK4LDgfKEijgfA3IKRvUgsUSXdrRaFPaEwxxFJDFrIXar19hZA8ICxE2m0psaufXdDlbSCtkeZBQG7ehXNFOgNPZAtOioH8Nn9e4XQqSHj9kw2UvWG4zNnGqjuQNVLdZCslccZAsb3MXdBqkKT7zfKKLlXpArwrbi5bnkdZB2lNwftmRiZAbYZAKZC9GMJgZDZD"
    return {
      statusCode: HttpStatus.OK,
      data: req.user as any,
    };
  }

  // @Get('/facebook/callback')
  // @UseGuards(AuthGuard('facebook'))
  // async facebookLoginCallback(
  //   @Req() req: Request,
  //   @Param() params: FacebookCallbackDto,
  // ): Promise<any> {
  //   try {
  //     // console.log(req.user as any);
  //     const { code, role, redirectUri } = params;
  //     // console.log(code, role, redirectUri);
  //     // const fbAccessToken = await axios.get(`https://graph.facebook.com/v17.0/oauth/access_token${qs}`);

  //     // statusCode: HttpStatus.OK,
  //     // data: req.user as any,

  //     return {
  //       statusCode: HttpStatus.OK,
  //       data: req.user as any,
  //     };
  //   } catch (error) {
  //     return {
  //       statusCode: HttpStatus.BAD_REQUEST,
  //       message: error.message,
  //     };
  //   }
  // }

  @Post()
  create(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.create(createAuthDto);
  }

  @Get()
  findAll() {
    return this.authService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(+id, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}
