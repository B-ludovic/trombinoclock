# Exercices

Depuis le site [https://o-clock-fs-js.github.io/ecommerce-bdd/](https://o-clock-fs-js.github.io/ecommerce-bdd/)

## INSERT – Ajouter des données

### Exercice 1 : Ajouter des utilisateurs

Ajoute 3 utilisateurs avec les champs :

username, email, password

```sql
INSERT INTO users (username, email, password)
VALUES
    ('tyler_durden', 'tyler.durden@fightclub.com', 'mayhemmischiefsoap'),
    ('jean bon', 'jean.bon@fightclub.com', 'mayhemmischiefsoap'),
    ('yeah men', 'yeah.men@fightclub.com', 'mayhemmischiefsoap');
```

### Exercice 2 : Ajouter des catégories

Ajoute 3 catégories avec un nom et une description.

```sql
INSERT INTO categories (name, description)
VALUES
  ('Java', '😭'),
  ('JS', '❤️'),
  ('TS', '❤️❤️❤️❤️❤️❤️❤️❤️');
```

## UPDATE – Modifier des données

### Exercice 3 : Modifier l’email d’un utilisateur

Change l’email d’un utilisateur donné (identifié par son username).

```sql
UPDATE users
SET email = 'johnv2@example.com'
WHERE username = 'john_doe';
```

### Exercice 4 : Changer le statut d’une commande

Passe le status d’une commande à "expédiée".

```sql
UPDATE orders
SET status = 'Expédié'
WHERE id = 1;
```

## DELETE – Supprimer des données

### Exercice 5 : Supprimer un produit

Supprime un produit connu par son nom ou son id.

```sql
-- Le produit est lié à des `order items`, il faut d'abord supprimer ces liens.
DELETE FROM order_items WHERE product_id = 1;
-- Ensuite, on peut supprimer le produit.
DELETE FROM products WHERE id = 1;
```

### Exercice 6 : Supprimer une commande

Supprime une commande spécifique (par son id).

```sql
-- Avant de supprimer la commande, il faut supprimer les `order items` associés.
DELETE FROM order_items WHERE order_id = 1;
-- Ensuite, on peut supprimer la commande.
DELETE FROM orders WHERE id = 1;
```

## SELECT – Lire des données

### Exercice 7 : Lister tous les produits

Affiche tous les produits avec leur nom, prix et stock.

```sql
SELECT name, price, stock FROM products;
```

### Exercice 8 : Lister les produits d'une certaine catégorie

Affiche tous les produits dont category_id = 1.

```sql
SELECT * FROM products
WHERE category_id = 1;
```

### Exercice 9 : Rechercher un utilisateur par email

Trouve l’utilisateur dont l’email est "test@example.com".

```sql
SELECT * FROM users
WHERE email = 'test@example.com';
```

#### Bonus : Tous les utilisateurs avec comme nom de domaine email "example.com"

```sql
SELECT * FROM users
WHERE email ILIKE '%@example.com'
ORDER BY id;
```

### Exercice 10 : Produits les plus chers

Affiche les 5 produits les plus chers, du plus cher au moins cher.

```sql
SELECT * FROM products
ORDER BY price DESC
LIMIT 5;
```

### Exercice 11 : Pagination des commandes

Affiche 5 commandes à partir de la 6ᵉ (page 2 si page = 5 commandes).

```sql
SELECT * FROM orders
LIMIT 5
OFFSET 6;
```

### Exercice 12 : Produits triés par stock croissant

Affiche tous les produits triés par stock croissant.

```sql
SELECT * FROM products
ORDER BY stock ASC;
```
