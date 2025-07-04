// On charge les variables d'environnement situer dans le fichier .env
import "dotenv/config";
import express from "express";
import router from "./app/router.js";
import notFound from "./app/middlewares/notFound.js";

const app = express();
const PORT = process.env.PORT || 3000;

// On configure le moteur de template
app.set("view engine", "ejs");
// On configure le dossier où se trouvent les vues
app.set("views", "./app/views");

// On spécifie également le dossier qui contient les fichiers statiques / fichier qui ne sont pas modifier mais renvoyer tels quels (images, css, js front, ...)
app.use(express.static("public"));

// On ajoute un middleware pour récupérer les données envoyées par les formulaires html
app.use(express.urlencoded());

app.use(router);

app.use(notFound);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
