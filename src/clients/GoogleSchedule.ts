import { AxiosStatic } from 'axios';


export interface GoogleSchedulePointLocal {
  [key: string]: number;
}

export interface GoogleSchedulePoint {
  readonly time: string;
  readonly parts: GoogleSchedulePointLocal;
  readonly project: GoogleSchedulePointLocal;
}

export interface GoogleAppointmentResponse {
  appointmentHours: GoogleSchedulePoint[];
}

export interface AppointmentNormalized {
  dateInit: string;
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
    return points.appointmentHours.map(this.isValidPoint.bind(this)).map(point => ({ dateInit: point.data1 }));
  }

  private isValidPoint(point: Partial<GoogleSchedulePoint>) {

  }

}
