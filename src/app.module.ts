import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StationController } from './station/station.controller';
import { StationModule } from './station/station.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    StationModule,
    AuthModule,
    UsersModule,
    MongooseModule.forRoot('mongodb://localhost:27017/gas-station'),
  ],
  controllers: [AppController, StationController],
  providers: [AppService],
})
export class AppModule {}
