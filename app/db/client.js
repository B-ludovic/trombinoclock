import { Client } from "pg";

// Format de l'url de connexion `postgres://username:password@host:port/database`
const client = new Client(process.env.PG_URL);

// Connexion avec gestion d'erreur
try {
    await client.connect();
    console.log('✅ Connexion à PostgreSQL réussie');
} catch (error) {
    console.error('❌ Erreur de connexion à PostgreSQL:', error.message);
    console.error('💡 Vérifiez que Postgres.app est démarré et que les permissions sont correctes');
}

export default client;
