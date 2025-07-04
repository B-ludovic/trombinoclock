# Exercice

## Partie 1 : Page avec formulaire de création de promo

Je veux une page pour créer une promo

1. Avoir un lien vers la page de création de promo (Ajouter dans le menu (`header.ejs`) un lien vers la page)
2. Créer une route dans le routeur pour gérer cette page
3. Faire le contrôleur qui va gérer la logique de la page
4. N'oublier pas la vue (`integration/promo_edit.html`)

## Partie 2 : Création de promo

1. Gérer la soumission du formulaire (vérifier la route appeler lors de la soumission)
2. Router + controller pour gérer la création de promo (Attention, vérifier que vous récupérez bien les données du formulaire `express.urlencoded()` ;))
3. Ajouter une méthode dans le dataMapper pour créer une promo
4. Après avoir créer la promo, rediriger vers la page de liste des promos
