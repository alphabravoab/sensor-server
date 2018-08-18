import { JsonController, Post, Param, Get, Delete, Body, HttpCode } from 'routing-controllers'
import Sensor from '../entities/sensor';

@JsonController()
export default class SensorController {

  @Post('/sensors')
  @HttpCode(201)
  async giveValue(
    @Body() body: Sensor
  ) {
    console.log(body)
    const entity = Sensor.create(body)
    await entity

    const sensor = await entity.save()
    return sensor
  }


  @Get('/sensors/:id([0-9]+)')
  getSingleValue(
    @Param('id') id: number
  ) {
    return Sensor.findOneById(id)
  }

  @Get('/sensors')
  allEvents() {
    return Sensor.find()
  }

  @Delete('/sensors/:id([0-9]+)')
   remove(@Param("id") id: number) {
     return  Sensor.removeById(id);
  }



}
