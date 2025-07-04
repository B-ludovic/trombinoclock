import client from '../db/client.js';

const studentController = {
    renderCreateForm(_, res) {
        res.render('student_create');
    },

    async createStudent(req, res) {
        try {
            const { first_name, last_name, github_username, profile_picture_url, promo_id } = req.body;
            if (!first_name || !last_name || !github_username || !profile_picture_url || !promo_id) {
                res.status(400).send('Tous les champs sont requis');
                return;
            }
            const query = `
                INSERT INTO students (first_name, last_name, github_username, profile_picture_url, promo_id)
                VALUES ($1, $2, $3, $4, $5)
                RETURNING *;
            `;
            const values = [first_name, last_name, github_username, profile_picture_url, promo_id || null];
            await client.query(query, values);
            
            res.redirect('/?success=Étudiant créé avec succès');
    } catch (error) {
      console.error('Erreur lors de la création de l\'étudiant:', error);
      res.status(500).render('createStudent', {
        error: 'Une erreur est survenue lors de la création de l\'étudiant'
      });
    }
  }
};

export default studentController;