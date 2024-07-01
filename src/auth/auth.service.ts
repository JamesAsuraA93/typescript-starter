/* eslint-disable prettier/prettier */
import { HttpService } from '@nestjs/axios';
import { ClassSerializerInterceptor, HttpStatus, Injectable, UseInterceptors } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { AxiosResponse } from 'axios';
import { FacebookCallbackDto } from './dto/facebook-callback.dto';
// import queryString from 'query-string';
import { env } from 'process';
import { AuthEntity } from './entities/auth.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import { HttpService } from '@nestjs/axios';
// import { Injectable } from '@nestjs/common';
// import { lastValueFrom } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(
    private readonly httpService: HttpService,
    // private readonly authEntity: AuthEntity,
    @InjectRepository(AuthEntity)
    protected AuthRepo: Repository<AuthEntity>,
  ) {
    //
  }

  create(createAuthDto: CreateAuthDto) {
    console.log(createAuthDto);
    return 'This action adds a new auth';
  }

  @UseInterceptors(ClassSerializerInterceptor)
  async findAll() {
    const data = await this.AuthRepo.find();
    const data_hidden = new AuthEntity({
      ...data[0],
      password: undefined,
    });
    // console.log(data);
    return {
      statusCode: HttpStatus.OK,
      data: {
        ...data_hidden,
      },
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    console.log(updateAuthDto);
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }

  // client_id = <YOUR_APP_ID>
  // & redirect_uri=<YOUR_URL>
  // & client_secret=<YOUR_APP_SECRET>
  // & code=<AUTHORIZATION_CODE>

  async facebookGetDataByCode(
    facebookCallBackDto: FacebookCallbackDto,
  ): Promise<any> {
    // console.log({ facebookCallBackDto });
    // try {
    //   console.log({ code });
    //   // AQAe5t4CNh1XANKWojDcUg7_7-kT3rgdkBatA9ZefVHZe0INIz2ZsizdOQIYLW8eK5GGA767oliCe8Hu-wvYdjfGsz2fsEsr0kR7ScuiBZAHpqlyv8A-46xBn9PNvH-0RJKy67DQL4wdJRq03kQQY5BAR83j0lSe3cOZTWO3PFJ0MdyKHawEfeMKLlht6cWZcobpKpi77IZ7gXP7swnJrCzeXFo6BcYESOdi8njDpNa8jg7AjeeuUh5yIgua4KLvBcfs4fRlw21mBZS4_6TipcMknnVegFsrzYRryYxwkcQKF50ddEHtMnAfaK4JVwiMCVtavEVkdWvQGH_EgKYnfh332EoCkuPScjboXZuL_kvC0IgyCH7YK-mCU1Qnn39XsB4NQb7RQwFxCuRqJcHHS1FP#_=_
    //   // const url = 'http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json';
    //   // const { data } = await firstValueFrom(this.httpService.get(url));
    //   // return data;
    //   const url = ``;
    //   // https://graph.facebook.com/v17.0/oauth/access_token${qs}
    //   // const fbAccessToken = await axios.get(`https://graph.facebook.com/v17.0/oauth/access_token${qs}`);

    //   const { data } = await firstValueFrom(this.httpService.get(url));
    //   console.log(data);
    //   return {
    //     statusCode: HttpStatus.OK,
    //     data: data.data,
    //   };
    // } catch (error) {
    //   return {
    //     statusCode: HttpStatus.BAD_REQUEST,
    //     message: error.message,
    //   };
    // }

    // const qs = qsBuilder({
    //   client_id: env.FB_APP_ID,
    //   redirect_uri: result.data.redirectUri,
    //   client_secret: env.FB_APP_SECRET,
    //   code: result.data.code,
    // });
    // const qs = queryString.stringify({
    //   // url: 'https://foo.bar',
    //   query: {
    //     client_id: env.FB_APP_ID,
    //     redirect_uri: facebookCallBackDto.redirectUri,
    //     client_secret: env.FB_APP_SECRET,
    //     code: facebookCallBackDto.code,
    //   },
    //   // fragmentIdentifier: 'bar'
    // });

    // const fbAccessToken = await axios.get(`https://graph.facebook.com/v17.0/oauth/access_token${qs}`);

    //   https://graph.facebook.com/<API_VERSION>/oauth/access_token?
    //   client_id = <YOUR_APP_ID>
    // & redirect_uri=<YOUR_URL>
    // & client_secret=<YOUR_APP_SECRET>
    // & code=<AUTHORIZATION_CODE>
    // console.log(`https://graph.facebook.com/v17.0/oauth/access_token?client_id=${env.FB_APP_ID}&redirect_uri=${facebookCallBackDto.redirectUri}&client_secret=${env.FB_APP_SECRET}&code=${facebookCallBackDto.code}`);
    // return {
    //   statusCode: HttpStatus.OK,
    //   data: `https://graph.facebook.com/v17.0/oauth/access_token?client_id=${env.FB_APP_ID}&redirect_uri=${facebookCallBackDto.redirectUri}&client_secret=${env.FB_APP_SECRET}&code=${facebookCallBackDto.code}`
    // }

    //   const response: AxiosResponse | void = await lastValueFrom(
    //     this.httpService.get(
    //       `https://graph.facebook.com/oauth/access_token?client_id=${env.FB_APP_ID}&redirect_uri=${facebookCallBackDto.redirectUri}&client_secret=${env.FB_APP_SECRET}&code=${facebookCallBackDto.code}`,
    //     ),
    //   ).catch((err) => {
    //     console.log(err);
    //   });
    //   if (response === undefined ) {
    //     return {
    //       statusCode: HttpStatus.BAD_REQUEST,
    //       message: 'Error',
    //     };
    //   }
    //   // console.log(response.data as AxiosResponse);

    //   return {
    //     statusCode: HttpStatus.OK,
    //     data: response.data,
    //   };
    // }

    try {
      const response: AxiosResponse = await lastValueFrom(
        this.httpService.get(
          `https://graph.facebook.com/oauth/access_token?client_id=${env.FB_APP_ID}&redirect_uri=${facebookCallBackDto.redirectUri}&client_secret=${env.FB_APP_SECRET}&code=${facebookCallBackDto.code}`,
        ),
      )
      const accessToken = response.data.access_token as string;

      console.log({
        accessToken,
      });

      // console.log(response.data as AxiosResponse);

      return {
        statusCode: HttpStatus.OK,
        data: response.data,
      };
    }
    catch (error) {
      return {
        statusCode: HttpStatus.BAD_REQUEST,
        message: error.message,
      };
    }
  }
}
