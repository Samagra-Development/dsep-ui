import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { generateOrder } from 'utils/generators';
import { requestForwarder } from 'utils/utils';

@Injectable()
export class SelectService {
  constructor(private readonly httpService: HttpService) {}

  async handleSelectEvent(selectPayload: any) {
    console.log('select payload: ', selectPayload);

    const msg = generateOrder(selectPayload);
    console.log('generated order: ', msg);

    const payload = {
      context: selectPayload,
      message: msg,
    };

    console.log('payload: ', payload);
    console.log('process.env.BAP_URI: ', process.env.BAP_URI);
    return await requestForwarder(
      selectPayload.context.bpp_uri,
      payload,
      this.httpService,
    );
  }
}
