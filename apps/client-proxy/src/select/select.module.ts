import { Module } from '@nestjs/common';
import { SelectService } from './select.service';
import { SelectController } from './select.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [SelectService],
  controllers: [SelectController],
})
export class SelectModule {}
