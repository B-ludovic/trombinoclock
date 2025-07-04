# Requête SQL

## Challenge Épisode 2

```bash
# Se connecter à la base de données
sudo -u postgres psql -U trombi
```

```sql
-- Si besoin de lister les colonnes d'une table
\d <table_name>

-- Exemple
\d student
```

```sql
-- toutes les promos, dans l'ordre alphabétique
-- On est pas obligé de préciser l'ordre du ORDER BY, par défaut c'est ASC
SELECT * FROM promo ORDER BY name;

-- tous les étudiants, dans l'ordre alphabétique des noms de famille
SELECT id, first_name, last_name
FROM student

-- On peut trier sur plusieurs colonnes, ⚠️ l'ordre est important
ORDER BY last_name, first_name;
-- tous les étudiants de la promo 135
SELECT * FROM student
WHERE promo_id = 135;

-- les étudiants dont le nom ou le prénom ressemble à "max"
SELECT * FROM student
WHERE last_name LIKE '%max%'
   OR first_name LIKE '%max%'
ORDER BY last_name, first_name;
```

## Challenge Épisode 3

```sql
-- Insérer dans la table "student" un étudiant qui s'appelle "Chuck Norris" appartenant à la promo 5
INSERT INTO student (first_name, last_name, promo_id)
VALUES ('Chuck', 'Norris', 5);

-- Insérer dans la table "promo" une promo qui s'appelle "César" et ne possède pas d'orga
INSERT INTO promo (name)
VALUES ('César');

-- Mettre à jour la promo 5 pour la renommer "Cleo"
UPDATE promo
SET name = 'Cleo'
WHERE id = 5;

-- Supprimer la promo 123
-- Des étudiants peuvent être liés à cette promo, il faut d'abord supprimer ces liens.
DELETE FROM student
WHERE promo_id = 123;

-- Ensuite, on peut supprimer la promo.
DELETE FROM promo
WHERE id = 123;
```
