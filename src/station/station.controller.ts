import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { StationService } from './station.service';
import { JwtAuthGuard } from 'src/auth/auth.guard';

@Controller('station')
export class StationController {
  constructor(private readonly stationService: StationService) {}
  @UseGuards(JwtAuthGuard)
  @Post()
  async createStation(
    @Body('name') name: string,
    @Body('location') location: string,
    @Body('fuelAvailable') fuelAvailable: number,
  ) {
    return this.stationService.createStation(name, location, fuelAvailable);
  }

  @Get()
  async getAllStation() {
    return this.stationService.getAllStation();
  }
}
