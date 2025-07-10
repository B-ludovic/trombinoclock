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
      text: "SELECT * FROM promo WHERE id = $1;",
      values: [id],
    });

    return result.rows[0];
  },
  async getStudentById(id) {
    const result = await client.query({
      text: `
        SELECT 
          s.id,
          s.first_name,
          s.last_name,
          s.github_username,
          s.profile_picture_url,
          s.promo_id,
          p.name as promo_name,
          p.github_organization as promo_github_organization
        FROM student s
        INNER JOIN promo p ON s.promo_id = p.id
        WHERE s.id = $1;
      `,
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
  async createStudent(studentInfo) {
    await client.query({
      text: `
        INSERT INTO student (first_name, last_name, github_username, profile_picture_url, promo_id)
        VALUES ($1, $2, $3, $4, $5);
      `,
      values: [
        studentInfo.first_name,
        studentInfo.last_name,
        studentInfo.github_username,
        studentInfo.profile_picture_url,
        studentInfo.promo_id
      ],
    });
  },
  async searchPromosByName(searchTerm) {
    const result = await client.query({
      text: "SELECT * FROM promo WHERE name ILIKE $1 ORDER BY name;",
      values: [`%${searchTerm}%`],
    });
    return result.rows;
  },
  async searchStudentsByName(searchTerm) {
    const result = await client.query({
      text: `
        SELECT * FROM student 
        WHERE first_name ILIKE $1 
           OR last_name ILIKE $1 
           OR github_username ILIKE $1 
        ORDER BY last_name, first_name;
      `,
      values: [`%${searchTerm}%`],
    });
    return result.rows;
  },
  async getPromoStatistics() {
    const result = await client.query(`
      SELECT 
        p.id,
        p.name,
        p.github_organization,
        COUNT(s.id) as student_count
      FROM promo p
      LEFT JOIN student s ON p.id = s.promo_id
      GROUP BY p.id, p.name, p.github_organization
      ORDER BY student_count DESC, p.name;
    `);
    
    return result.rows;
  },
  async getDetailedPromoStats(promoId) {
    const result = await client.query(`
      SELECT 
        p.id,
        p.name,
        p.github_organization,
        COUNT(s.id) as student_count,
        COUNT(CASE WHEN s.profile_picture_url IS NOT NULL THEN 1 END) as students_with_avatar,
        COUNT(CASE WHEN s.github_username IS NOT NULL THEN 1 END) as students_with_github
      FROM promo p
      LEFT JOIN student s ON p.id = s.promo_id
      WHERE p.id = $1
      GROUP BY p.id, p.name, p.github_organization;
    `, [promoId]);
    
    return result.rows[0];
  },
  async getGlobalStatistics() {
    const result = await client.query(`
      SELECT 
        (SELECT COUNT(*) FROM promo) as total_promos,
        (SELECT COUNT(*) FROM student) as total_students,
        (SELECT COUNT(*) FROM student WHERE profile_picture_url IS NOT NULL) as students_with_avatar,
        (SELECT COUNT(*) FROM student WHERE github_username IS NOT NULL) as students_with_github,
        (SELECT COUNT(*) FROM promo WHERE id NOT IN (SELECT DISTINCT promo_id FROM student WHERE promo_id IS NOT NULL)) as empty_promos
    `);
    
    return result.rows[0];
  },
};

export default dataMapper;
