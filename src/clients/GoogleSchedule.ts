import { AxiosStatic } from 'axios';


export interface GoogleSchedulePointLocal {
  [key: string]: number;
}

export interface GoogleSchedulePoint {
  data: string;
}

export interface GoogleAppointmentResponse {
  appointmentDates: GoogleSchedulePoint[];
}

export interface AppointmentNormalized {
  data: string;
}

export class GoogleSchedule {

  readonly params1 = "";
  readonly params2 = "";
  readonly params3 = "";
  readonly params4 = "";
  readonly params5 = "";

  constructor(protected request: AxiosStatic) { }

  public async fetchPoints(initDate: string, endDate: string): Promise<{}> {
    const response = await this.request.get<GoogleAppointmentResponse>('http://db-appointment');
    return this.normalizeResponse(response.data);
  }

  private normalizeResponse(points: GoogleAppointmentResponse): AppointmentNormalized[] {
    return [];
  }

  private isValidPoint(point: Partial<GoogleSchedulePoint>): boolean {
    
    
    
    return true;
  }

}
