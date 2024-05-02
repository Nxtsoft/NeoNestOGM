import * as neo4j from 'neo4j-driver';
import { Neo4jOptions } from '../interfaces/neo4j-options.interface';

export async function testNeo4jConnection(options: Neo4jOptions): Promise<void> {
  const driver = neo4j.driver(
    `${options.neo4jScheme}://${options.neo4jHost}:${options.neo4jPort}`,
    neo4j.auth.basic(options.neo4jUsername, options.neo4jPassword)
  );

  // Declare session inside the try block to ensure it's scoped correctly
  let session: neo4j.Session | null = null;

  try {
    session = driver.session();
    // Run a simple query to check connectivity
    await session.run('RETURN 1');
    console.log('Connection to Neo4j verified successfully');

    // Optionally get server info if needed
    const serverInfo = await driver.getServerInfo();
    console.log('Connected to Neo4j server:', serverInfo);
  } catch (error) {
    console.error('Failed to connect to Neo4j:', error);
    throw new Error('Failed to connect to Neo4j');
  } finally {
    // Ensure session is closed in the finally block
    if (session) {
      await session.close();
    }
    await driver.close();
  }
}