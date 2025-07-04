# Faire des requêtes vers Postgres avec Node.js

Outils :

- client Postgres => un outil qui va me permettre de me connecter à ma base de données Postgres et d'exécuter des requêtes SQL
  - [pg](https://www.npmjs.com/package/pg) => un client Postgres pour Node.js
- variables d'environnement => On ne souhaite pas stocker des informations sensibles comme des identifiants de connexion dans le code source
  - [dotenv](https://www.npmjs.com/package/dotenv) => un module qui charge les variables d'environnement à partir d'un fichier `.env`

## Installation

```bash
npm install pg dotenv
```

## Configuration

### Variables d'environnement

Dans le fichier `.env`, stocker les informations de connexion à la base de données :

```
PG_URL=postgres://user:password@localhost:5432/mydatabase
```

Dans notre cas

```
PG_URL=postgres://trombi:trombi@localhost:5432/trombi
```

### Initialisation du client Postgres

```js
// app/db/client.js
import { Client } from "pg";

// Je me connecte à la base de données Postgres renseignée dans la variable d'environnement PG_URL
const client = new Client(process.env.PG_URL);

// Je me connecte à la base de données
await client.connect();

// On met à disposition le client qui permet de faire des requêtes vers la base de données
export default client;
```

## Utilisation

```js
// app/controllers/order.controller.js
import client from "../db/client.js";

const orderController = {
  async ordersPage(req, res) {
    // ...
    const result = await client.query("...");

    // Les données retournées par la requête sont dans result.rows
    console.log(result.rows);

    // ...
  },
};
```
