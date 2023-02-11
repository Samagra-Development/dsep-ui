import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppGateway } from './app.gateway';
import { SearchService } from './search/search.service';
import { SearchModule } from './search/search.module';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { SelectModule } from './select/select.module';
import { SelectService } from './select/select.service';

@Module({
  imports: [
    HttpModule,
    SearchModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SelectModule,
  ],
  controllers: [AppController],
  providers: [AppService, AppGateway, SearchService, SelectService],
})
export class AppModule {}
