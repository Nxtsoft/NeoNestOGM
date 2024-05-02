import { DynamicModule, Module } from '@nestjs/common';
import { NeoNestOgmService } from './neo-nest-ogm.service';
import { ConfigModule } from '@nestjs/config';

@Module({})
export class NeoNestOgmModule {
  static forRoot(config: Record<string, any>): DynamicModule {
    return {
      module: NeoNestOgmModule,
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          load: [() => config],
        }),
      ],
      providers: [NeoNestOgmService],
      exports: [NeoNestOgmService],
    };
  }
}