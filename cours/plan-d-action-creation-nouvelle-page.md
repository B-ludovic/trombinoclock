# Plan d'action pour la création d'une nouvelle page

1. On doit pouvoir se rendre sur la page que l'on souhaite créer

- On s'assure d'avoir un lien (balise `a`) qui pointe vers la nouvelle page. Tout le html qui va être généré est situer dans mes `views`.

2. Il va falloir indiquer à Express que l'on souhaite gérer cette nouvelle page / route.

- `app/router.js` on va ajouter une nouvelle route qui va correspondre à la page que l'on souhaite créer.

3. On va créer un contrôleur qui va gérer la logique de la page que l'on souhaite créer.

- Il va récupérer les données nécessaires pour afficher la page.
- Il va appeler la vue qui va afficher la page en lui fournissant les données nécessaires.
