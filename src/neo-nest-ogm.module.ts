import { DynamicModule, Module, Global } from '@nestjs/common';
import { NeoNestOgmService } from './neo-nest-ogm.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Neo4jOptions } from './interfaces/neo4j-options.interface';
import { testNeo4jConnection } from './utils/testConnection';

@Global()
@Module({})
export class NeoNestOgmModule {
  static forRoot(options: Neo4jOptions): DynamicModule {
    return {
      module: NeoNestOgmModule,
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          load: [() => ({
            neo4j: options,
          })],
        }),
      ],
      providers: [
        {
          provide: 'NEO4J_CONNECTION_TEST',
          inject: [ConfigService],
          useFactory: async (configService: ConfigService) => {
            const neoConfig = configService.get<Neo4jOptions>('neo4j');
            await testNeo4jConnection(neoConfig);
          },
        },
        NeoNestOgmService,
      ],
      exports: [NeoNestOgmService],
    };
  }
}