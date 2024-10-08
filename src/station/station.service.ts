import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Station } from './station.schema';
import { Model } from 'mongoose';
import { createStationDto } from './dto/createStationDto';

@Injectable()
export class StationService {
  constructor(
    @InjectModel(Station.name) private stationModel: Model<Station>,
  ) {}

  async createStation(
    name: string,
    location: string,
    fuelAvailable: number,
  ): Promise<createStationDto> {
    const newStation = new this.stationModel({ name, location, fuelAvailable });
    return newStation.save();
  }

  async getAllStation(): Promise<any[]> {
    const stations = await this.stationModel
      .find()
      .select('name location fuelAvailable')
      .exec();
    return stations;
  }
}
