import express from "express";
import mainController from "./controllers/main.controller.js";
import promoController from "./controllers/promo.controller.js";

const router = express.Router();

// Rôle du router :
// Quand une requête arrive (par exemple un navigateur qui va sur l'url `/promos`)
// Il va regarder si l'url correspond à une route définie dans le router
router.get("/", mainController.homepage);
router.get("/promos", promoController.listPage);
router.get("/promos/create", promoController.createPage);
router.post("/promos/create", promoController.createPromoAction);
router.get("/promos/:id", promoController.detailPage);
router.get("/promos/:id/students", promoController.studentsPage);

export default router;
