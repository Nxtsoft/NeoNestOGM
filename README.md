# NeoNestOGM

NeoNestOGM is a Neo4j Object Graph Mapper for NestJS. It is a wrapper around the official Neo4j driver for JavaScript, and provides a simple way to interact with a Neo4j database in a NestJS application.

## Configuration

You can customize the NeoNestOgm by passing configuration parameters when importing the module:

```typescript
import { NeoNestOgmModule } from 'neo-nest-ogm';

@Module({
  imports: [
    NeoNestOgmModule.forRoot({
      neo4jScheme: 'neo4j+s',
      neo4jHost: 'localhost',
      neo4jPort: 7687,
      neo4jUsername: 'admin',
      neo4jPassword: 'password',
    }),
  ],
})
export class AppModule {}
