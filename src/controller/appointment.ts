import { Controller, Get } from '@overnightjs/core';
import { Request, Response } from 'express';

@Controller('appointment')
export class AppointmentController {
  @Get('')
  public getAppointmentForLoggedUser(_: Request, res: Response): void {
    

    
    res.send([{ nome: 'Italo' }]);
  }
}
