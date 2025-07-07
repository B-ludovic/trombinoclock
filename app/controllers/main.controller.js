import dataMapper from '../dataMapper.js';

const mainController = {
  homepage(req, res) {
    res.render("homepage");
  },
  
  async searchPage(req, res) {
    const searchTerm = req.query.q || '';
    const searchPerformed = searchTerm.length > 0;
    
    let promos = [];
    let students = [];
    
    if (searchPerformed) {
      try {
        // Rechercher dans les promos et les étudiants
        promos = await dataMapper.searchPromosByName(searchTerm);
        students = await dataMapper.searchStudentsByName(searchTerm);
      } catch (error) {
        console.error('Erreur lors de la recherche:', error);
      }
    }
    
    res.render('student_search', {
      searchTerm,
      searchPerformed,
      promos,
      students
    });
  }
};

export default mainController;
