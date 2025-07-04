# Challenge Épisode 4

## Ajouter un étudiant

Si ce n'est pas déjà fait, ajouter sur la page d'accueil un nouveau lien "Ajouter un étudiant" qui pointe vers l'url `/admin/createStudent`.

### Étape 1: afficher le formulaire

Implémenter la route `/student/create` et le traitement dans un nouveau controller `studentController`.  
Une version HTML du formulaire est dipo dans le dossier intégration (`add_student.html`).

### Étape 2 : Remplir le select

Dans la route qui vient d'être implémentée, inspire toi de ce qui a été fait dans les autres controllers pour remplir le `<select>` du formulaire avec des `<option>` qui représentent les promos. Bien sur, la liste des promos doit venir de la base de données !

<details>
<summary>Un coup de main ?</summary>

- Commence par require `dataMapper` dans le controller `studentController`.
- Il faut ensuite appeller `dataMapper.getAllPromos`, pour récupérer la liste des promotions !
- Passe la liste des promotions à la view `add_student`.
- Dans la view `add_student`, utilise la liste des promos pour créer des `<option>`. Puisque c'est une liste, il faudra une boucle.

</details>

### Étape 3/Bonus : Traiter le POST

Utilise tout ce que tu connais pour traiter les informations du formulaire et ajouter un étudiant dans la base de données !

Remarque : on a déjà préparé la requete SQL ! cf [doc/sql.md](./doc/sql.md)

<details>
<summary>Un peu d'aide ?</summary>

- Il faut définir une route POST qui va déclencher la méthode `studentController.createStudentAction`.
- Il faut maintenant coder la méthode `studentController.createStudentAction` !
  - Ajoute une nouvelle méthode `createStudent(studentInfo)` dans le `dataMapper`. Cette méthode doit lancer une requête "INSERT ..." en utilisant les paramètres passés dans l'objet `studentInfo`. Inspire toi de ce qui a été fait précédement !
  - Dans `studentController.createStudentAction`, il faut maintenant appeller `dataMapper.createStudent` en lui passant les bons paramètres !
  - Si tout s'est bien passé, redirige l'utilisateur vers la page de détails de la promotion sélectionnée.
  </details>
