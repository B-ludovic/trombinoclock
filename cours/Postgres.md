# Postgres

## Se connecter depuis le terminal

```bash
# Sur la VM
# Mot de passe de la VM : `par dessus les nuages`
# nécessaire pour lancer les commandes en `sudo`
sudo -u postgres psql

# Sur mac
psql -U postgres
```

## Créer une base de données

```sql
-- Exemple de création d'une base de données avec un utilisateur spécifique
CREATE USER nom_utilisateur WITH PASSWORD 'mot_de_passe';
CREATE DATABASE nom_base_de_donnees WITH OWNER nom_utilisateur;

-- Pour trombi
CREATE USER trombi WITH PASSWORD 'trombi';
CREATE DATABASE trombi WITH OWNER trombi;
```

## Sortir de psql

```sql
\q
```

## Se connecter à une base de données spécifique

```bash
# Sur la VM
psql -U nom_utilisateur -d nom_base_de_d

# Example pour trombionnees
psql -U trombi -d trombi
```

## Exécuter un script SQL

```bash
# Attention au chemin du script !
psql -U mon_utilisateur -f /chemin/vers/le/script.sql

# Exemple pour trombi
# On s'assure d'être à la racine du projet pour lancer cette commande
psql -U trombi -f ./data/create_db.sql
```

## Quelques requêtes SQL

```sql
-- Afficher les bases de données
\l
-- Afficher les tables de la base de données courante
\dt

-- Afficher la colonne `name` de la table `promo`
-- SELECT permet de sélectionner des colonnes spécifiques
-- FROM indique la table à partir de laquelle on sélectionne
SELECT name FROM promo;

SELECT id, name FROM promo;

-- Pour récupérer toutes les colonnes d'une table
SELECT * FROM promo;

-- On peut ajouter des conditions avec WHERE
SELECT *
FROM promo
WHERE id = 866;

SELECT *
FROM promo
WHERE id = 866 OR name = 'Berlin - Développeur Back End';

SELECT *
FROM promo
WHERE id = 866 AND name = 'Berlin - Développeur Back End';

-- Pour trier les résultats, on utilise ORDER BY
SELECT *
FROM promo
ORDER BY name DESC; -- DESC pour décroissant, ASC pour croissant

-- Pour limiter le nombre de résultats, on utilise LIMIT
SELECT *
FROM promo
ORDER BY name ASC
LIMIT 5;

-- Pour sauter un certain nombre de résultats, on utilise OFFSET
SELECT *
FROM promo
ORDER BY name ASC
LIMIT 5 OFFSET 2; -- Sauter les 2 premiers résultats

-- Pour filtrer les résultats sur l'existance d'une chaine de caractères, on utilise LIKE ou ILIKE
SELECT *
FROM promo
WHERE name LIKE '%Berlin%'; -- % pour indiquer n'importe quelle chaine de caractères avant

SELECT *
FROM promo
WHERE name ILIKE '%berlin%'; -- ILIKE pour une recherche insensible à la casse
```

## Création / modification / suppression

```sql

-- Pour insérer une nouvelle ligne dans la table promo
-- Entre les `()` on sépcifie les colonnes dans lesquelles on va insérer des données
INSERT INTO promo (name, github_organization)
-- Ensuite on spécifie les valeurs à insérer, ⚠️ l'ordre doit correspondre à celui des colonnes
VALUES ('Berlin - Les meilleurseuhhhheee', 'https://github.com/O-clock-Dublin');

-- Pour mettre à jour nos données
UPDATE promo
-- SET va permettre de spécifier les colonnes à mettre à jour
SET
  name = 'Berlin - Les meilleureuh',
  github_organization = 'toto'
-- ⚠️ ON FAIT VRAIMENT ATTENTION À NE PAS OUBLIER DE SPÉCIFIER LA CONDITION WHERE
WHERE id = 891;

-- Pour supprimer une ligne de la table promo
DELETE FROM promo
-- ⚠️ ON FAIT VRAIMENT ATTENTION À NE PAS OUBLIER DE SPÉCIFIER LA CONDITION WHERE
WHERE id = 891;
```

## Sauvegarde et restauration d'une base de données

```bash
# Sauvegarde d'une base de données
pg_dump nom_base_de_donnees > nom_base_de_donnees.sql

# Exemple pour trombi
pg_dump trombi > trombi.sql

# Restauration d'une base de données
psql -U nom_utilisateur -d nom_base_de_donnees -f nom_base_de_donnees.sql

# Exemple pour trombi
psql -U trombi -d trombi -f trombi.sql
```
