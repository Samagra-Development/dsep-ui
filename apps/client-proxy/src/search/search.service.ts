import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { contextGenerator, intentGenerator } from 'utils/generators';
import { DSEP_SEARCH_FILTER } from 'utils/types';
import { requestForwarder } from 'utils/utils';

@Injectable()
export class SearchService {
  constructor(private readonly httpService: HttpService) {}

  async handleSearchEvent(
    transactionId: string,
    searchPayload: DSEP_SEARCH_FILTER,
  ): Promise<any> {
    const msg = intentGenerator(searchPayload);
    console.log('generated intent: ', msg);
    const payload = {
      context: contextGenerator(
        transactionId,
        'search',
        'https://bap.dsep.samagra.io',
        'bap.dsep.samagra.io',
      ),
      message: msg,
    };
    console.log('payload: ', payload);
    console.log('process.env.BAP_URI: ', process.env.BAP_URI);
    return await requestForwarder(
      'http://localhost:5010',
      payload,
      this.httpService,
    );
  }
}
