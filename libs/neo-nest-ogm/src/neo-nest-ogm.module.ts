import { Module } from '@nestjs/common';
import { NeoNestOgmService } from './neo-nest-ogm.service';

@Module({
  providers: [NeoNestOgmService],
  exports: [NeoNestOgmService],
})
export class NeoNestOgmModule {}
