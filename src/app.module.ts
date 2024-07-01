import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
// import { DatabaseModule } from './database/database.module';
import { FacebookCfModule } from './facebook-cf/facebook-cf.module';
import { FacebookStrategy } from './utils/facebook.strategy';
import { DatabaseModule } from './database/database.module';
import { AppConfigModule } from './config/config.module';
// import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    FacebookCfModule,
    ScheduleModule.forRoot(),
    AuthModule,
    HttpModule,
    AppConfigModule,
    DatabaseModule,
    // DatabaseModule,
    // ConfigService,
  ],
  controllers: [AppController],
  providers: [AppService, FacebookStrategy],
})
export class AppModule {
  //
}
