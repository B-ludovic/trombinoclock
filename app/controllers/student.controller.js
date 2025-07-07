import dataMapper from '../dataMapper.js';

const studentController = {
    async renderCreateForm(_, res) {
        const promos = await dataMapper.getAllPromos();
        res.render('student_create', {
            promos: promos
        });
    },

    async createStudentAction(req, res) {
        try {
            // Je récupère les données envoyées par le formulaire
            console.log("req.body", req.body);
            const studentInfoToInsert = req.body;
            
            // Validation basique des champs requis
            if (!studentInfoToInsert.first_name || !studentInfoToInsert.last_name || 
                !studentInfoToInsert.github_username || !studentInfoToInsert.profile_picture_url || 
                !studentInfoToInsert.promo_id) {
                const promos = await dataMapper.getAllPromos();
                return res.status(400).render('student_create', {
                    promos: promos,
                    error: 'Tous les champs sont requis'
                });
            }

            // On appelle le dataMapper pour insérer l'étudiant dans la base de données
            await dataMapper.createStudent(studentInfoToInsert);

            // On redirige l'utilisateur vers la page de détails de la promotion sélectionnée
            res.redirect(`/promos/${studentInfoToInsert.promo_id}`);
        } catch (error) {
            console.error('Erreur lors de la création de l\'étudiant:', error);
            const promos = await dataMapper.getAllPromos();
            res.status(500).render('student_create', {
                promos: promos,
                error: 'Une erreur est survenue lors de la création de l\'étudiant'
            });
        }
    }
};

export default studentController;