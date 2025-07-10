import dataMapper from '../dataMapper.js';

const statsController = {
  // Page générale des statistiques
  async statsPage(req, res) {
    try {
      const promoStats = await dataMapper.getPromoStatistics();
      const globalStats = await dataMapper.getGlobalStatistics();
      
      res.render('stats', {
        promoStats,
        globalStats,
        title: 'Statistiques générales'
      });
    } catch (error) {
      console.error('Erreur lors de la récupération des statistiques:', error);
      res.status(500).render('error', { 
        message: 'Erreur lors du chargement des statistiques' 
      });
    }
  },

  // Statistiques détaillées d'une promo
  async promoStatsPage(req, res) {
    try {
      const promoId = parseInt(req.params.id);
      
      if (isNaN(promoId)) {
        return res.status(400).render('error', { 
          message: 'ID de promo invalide' 
        });
      }

      const promoStats = await dataMapper.getDetailedPromoStats(promoId);
      
      if (!promoStats) {
        return res.status(404).render('error', { 
          message: 'Promo non trouvée' 
        });
      }

      const students = await dataMapper.getStudentsByPromoId(promoId);
      
      res.render('promo_stats', {
        promo: promoStats,
        students,
        title: `Statistiques - ${promoStats.name}`
      });
    } catch (error) {
      console.error('Erreur lors de la récupération des statistiques de la promo:', error);
      res.status(500).render('error', { 
        message: 'Erreur lors du chargement des statistiques de la promo' 
      });
    }
  }
};

export default statsController;
