import { Injectable } from '@nestjs/common';
import { AppGateway } from './app.gateway';

@Injectable()
export class AppService {
  constructor(private readonly appGateway: AppGateway) {}
  getHello(): string {
    return 'Hello World!';
  }
  handleResponse(body: any) {
    this.appGateway.handleResponse(body);
    return;
  }
}
