import { Client } from "pg";

// Format de l'url de connexion `postgres://username:password@host:port/database`
const client = new Client(process.env.PG_URL);

let isConnected = false;

// Fonction pour s'assurer que la connexion est établie
const ensureConnection = async () => {
  if (!isConnected) {
    try {
      await client.connect();
      isConnected = true;
      console.log("✅ Connexion à PostgreSQL réussie");
    } catch (error) {
      console.error("❌ Erreur de connexion à PostgreSQL:", error.message);
      throw error;
    }
  }
};

// Wrapper pour les requêtes qui assure la connexion
const query = async (...args) => {
  await ensureConnection();
  return client.query(...args);
};

// Export du client avec la méthode query wrappée
export default { query };
