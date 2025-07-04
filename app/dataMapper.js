// Le rôle du dataMapper va être d'aller chercher les données
import client from "./db/client.js";

const dataMapper = {
  async getAllPromos() {
    const result = await client.query("SELECT * FROM promo ORDER BY id;");

    // Je retourne les données récupérées depuis la base de données
    return result.rows;
  },
  async getPromoById(id) {
    const result = await client.query({
      // IL EST INTERDIT DE FAIRE DE LA CONCATENATION DE CHAÎNES DE CARACTÈRES POUR ÉVITER LES INJECTIONS SQL
      // $1 va être remplacé par la 1ère valeur du tableau `values`
      // $2 va être remplacé par la 2ème valeur du tableau `values`
      // $3 va être remplacé par la 3ème valeur du tableau `values`
      // etc...
      text: "SELECT * FROM promo WHERE id = $1;",
      values: [id],
    });

    return result.rows[0];
  },
  async getStudentsByPromoId(promoId) {
    const result = await client.query({
      text: "SELECT * FROM student WHERE promo_id = $1 ORDER BY id;",
      values: [promoId],
    });

    // Je retourne les données récupérées depuis la base de données
    return result.rows;
  },
  async createPromo(promoData) {
    await client.query({
      text: `
        INSERT INTO promo (name, github_organization)
        VALUES ($1, $2);
      `,
      values: [promoData.name, promoData.github_organization],
    });
  },
};

export default dataMapper;
