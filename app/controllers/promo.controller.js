import dataMapper from "../dataMapper.js";

const promoController = {
  // Le but de cette méthode du contrôleur est de générer le HTML de la page
  async listPage(req, res) {
    const promos = await dataMapper.getAllPromos();

    res.render("promos", {
      // côté ejs on va pouvoir utiliser la variable promos qui contient la valeur de promosData
      promos: promos,
    });
  },
  async detailPage(req, res) {
    // DetailPage est positionné sur une route paramétrée (`/promos/:id`)
    // Je peux donc récupérer la valeur de `:id` dans `req.params.id`
    // La donnée étant récupérer depuis l'URL, elle est de type `string`
    // On va la convertir pour pouvoir la comparer avec les données de promosData
    const promoId = req.params.id;

    const promoFound = await dataMapper.getPromoById(promoId);

    // const promoFound = promosData.find((promo) => promo.id === promoId);

    if (!promoFound) {
      res.status(404).send("Promo non trouvée");
      return;
    }

    res.render("promo", {
      promo: promoFound,
    });
  },
  async studentsPage(req, res, next) {
    const promoId = Number(req.params.id);
    console.log(req.params);

    const promoFound = await dataMapper.getPromoById(promoId);

    if (!promoFound) {
      next(); // On passe la main au middleware suivant qui est celui qui gère les 404
      return;
    }

    const students = await dataMapper.getStudentsByPromoId(promoId);

    res.render("students", {
      promo: promoFound,
      students: students,
    });
  },
  createPage(req, res) {
    res.render("promo_edit");
  },
  async createPromoAction(req, res) {
    // Je dois récupérer les données envoyées par le formulaire
    console.log("req.body", req.body);
    const promoDataToInsert = req.body;
    // Bonne pratique qu'on verra plus tard, on ajouterai une validation des données
    // S'assurer qu'il y ai bien un `name` qui soit une chaîne de caractères d'au moins 1 caractère

    // On appel le dataMapper pour insérer la promo dans la base de données
    await dataMapper.createPromo(promoDataToInsert);

    // On redirige l'utilisateur vers la liste des promos
    res.redirect("/promos");
  },
};

export default promoController;
