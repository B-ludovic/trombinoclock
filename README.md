# 🎓 TrombinoC'lock - Student Management System

> Un système de gestion d'étudiants développé avec Node.js, Express et PostgreSQL

## 📋 À propos

TrombinoC'lock est une application web fullstack permettant de gérer des étudiants et leurs promotions. Cette application présente une architecture MVC complète avec une interface utilisateur moderne et une base de données relationnelle.

## 🚀 Technologies utilisées

### Backend

- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web minimaliste et flexible
- **PostgreSQL** - Base de données relationnelle robuste
- **EJS** - Moteur de template pour le rendu côté serveur

### Frontend

- **HTML5/CSS3** - Structure et style
- **JavaScript** - Interactions côté client
- **EJS Templates** - Rendu dynamique des pages

### Outils de développement

- **ESLint** - Linter pour maintenir la qualité du code
- **Prettier** - Formatage automatique du code
- **dotenv** - Gestion des variables d'environnement
- **node --watch** - Rechargement automatique en développement

## 🏗️ Architecture

```
📦 trombinoclock/
├── 🎯 app/
│   ├── 📁 controllers/     # Logique métier
│   ├── 📁 db/             # Configuration base de données
│   ├── 📁 middlewares/    # Middlewares Express
│   └── 📁 views/          # Templates EJS
├── 📊 data/               # Scripts SQL et données
├── 📖 docs/               # Documentation
├── 🎨 public/             # Assets statiques
└── 🧪 integration/        # Maquettes HTML
```

## ⚡ Fonctionnalités

- ✅ **Gestion des étudiants** : CRUD complet (Create, Read, Update, Delete)
- ✅ **Gestion des promotions** : Organisation par classes
- ✅ **Interface utilisateur intuitive** : Navigation fluide entre les sections
- ✅ **Architecture MVC** : Séparation claire des responsabilités
- ✅ **Base de données relationnelle** : Modélisation efficace des données
- ✅ **Responsive design** : Compatible mobile et desktop

## 🛠️ Installation et configuration

### Prérequis

- Node.js (v18+)
- PostgreSQL (v12+)
- npm ou yarn

### Installation

```bash
# Cloner le repository
git clone https://github.com/[votre-username]/trombinoclock.git
cd trombinoclock

# Installer les dépendances
npm install

# Configurer les variables d'environnement
cp .env.example .env
# Modifier .env avec vos paramètres de base de données

# Créer la base de données
psql -U postgres -f data/create_db.sql

# Lancer l'application en mode développement
npm run dev
```

### Variables d'environnement

```env
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=trombinoclock
DB_USER=your_username
DB_PASSWORD=your_password
```

## 🎯 Routes principales

| Route                  | Méthode  | Description             |
| ---------------------- | -------- | ----------------------- |
| `/`                    | GET      | Page d'accueil          |
| `/students`            | GET      | Liste des étudiants     |
| `/students/:id`        | GET      | Détails d'un étudiant   |
| `/admin/createStudent` | GET/POST | Ajouter un étudiant     |
| `/promos`              | GET      | Liste des promotions    |
| `/promos/:id`          | GET      | Détails d'une promotion |
| `/stats`               | GET      | Statistiques globales   |

## 💾 Structure de la base de données

### Tables principales

- **students** : Informations des étudiants
- **promos** : Données des promotions
- Relations : Un étudiant appartient à une promotion (1:N)

## 📱 Captures d'écran

_À ajouter : captures d'écran de l'interface utilisateur_

## 🔧 Scripts disponibles

```bash
npm run dev        # Lancement en mode développement avec rechargement automatique
npm run db:test    # Test de connexion à la base de données
```

## 🧪 Tests

Le projet inclut des tests de connexion à la base de données :

```bash
npm run db:test
```

## 📚 Apprentissages

Ce projet m'a permis de maîtriser :

- 🔹 **Architecture MVC** : Structuration propre d'une application web
- 🔹 **Express.js** : Routing, middlewares, et gestion des requêtes
- 🔹 **PostgreSQL** : Modélisation et requêtes SQL complexes
- 🔹 **EJS** : Templating dynamique et rendu côté serveur
- 🔹 **Async/Await** : Gestion asynchrone moderne en JavaScript
- 🔹 **Git** : Versioning et collaboration
- 🔹 **Debugging** : Résolution de problèmes et optimisation

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

_Développé dans le cadre de la formation O'Clock - Spécialisation Backend_
