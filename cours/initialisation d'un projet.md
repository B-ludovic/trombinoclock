# Initialisation d'un projet

1. `npm init -y`: Crée un fichier `package.json` avec les valeurs par défaut.
2. `npm install express ejs dotenv`: Installe les dépendances nécessaires pour le projet
   - `express`: Framework web pour Node.js.
   - `ejs`: Moteur de templates pour générer du HTML.
   - `dotenv`: Pour gérer les variables d'environnement.
3. Modifier le `package.json`
   - Ajouter `"type": "module"` pour utiliser les modules ES6.
   - Ajouter un script de démarrage `"dev": "node --watch index.js"` pour faciliter le développement.
4. Créer un fichier `.gitignore` pour ignorer les fichiers et dossiers non nécessaires au projet, comme `node_modules/` et `.env`.
5. Créer le fichier `.env` et `.env.example` pour gérer les variables d'environnement, comme les configurations du PORT de notre serveur.
   - Le fichier `.env.example` sert de modèle pour les variables d'environnement. Si un développeur clone le projet, il peut copier ce fichier en `.env` et y ajouter ses propres valeurs.
6. Créer le fichier `index.js` qui sera le point d'entrée de l'application.

## Bonus

Utilisation d'ESLint pour maintenir un code propre et cohérent.

[Lien vers la documentation](https://eslint.org/docs/latest/use/getting-started)

```bash
npm init @eslint/config@latest
```

Utilisation de Prettier pour formater le code automatiquement.
(point virgule, espaces, quotes, etc.)

[lien vers la documentation](https://prettier.io/docs/install)

```bash
npm install --save-dev --save-exact prettier
node --eval "fs.writeFileSync('.prettierrc','{}\n')"
```
