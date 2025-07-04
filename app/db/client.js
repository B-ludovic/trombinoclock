import { Client } from "pg";

// Format de l'url de connexion `postgres://username:password@host:port/database`
const client = new Client(process.env.PG_URL);

await client.connect();

export default client;
