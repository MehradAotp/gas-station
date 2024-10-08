import { Module } from '@nestjs/common';
import { StationService } from './station.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Station, StationSchema } from './station.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Station.name, schema: StationSchema }]),
  ],
  providers: [StationService],
  exports: [StationService],
})
export class StationModule {}
