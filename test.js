import "dotenv/config";
import dataMapper from './app/dataMapper.js';
import client from "./app/db/client.js";

// Si je souhaite utiliser le mot clé `await` dans ma fonction, je dois la déclarer comme `async`
async function getAllStudents() {
  // Lorsque l'on souhaite récupérer les données de la requête, on va les chercher dans la propriété `rows`
  const result = await client.query("SELECT * FROM student;");

  const students = result.rows;

  console.log(students);

  return students;
}

async function testDatabase() {
  try {
    console.log('🔍 Test de connexion à la base de données...');
    
    // Test de connexion
    await client.query('SELECT NOW()');
    console.log('✅ Connexion PostgreSQL réussie');
    
    // Test des tables
    console.log('\n📋 Vérification des tables...');
    
    const tablesResult = await client.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
    `);
    
    console.log('Tables trouvées:', tablesResult.rows.map(row => row.table_name));
    
    // Test des méthodes du dataMapper
    console.log('\n🔧 Test des méthodes dataMapper...');
    
    const promos = await dataMapper.getAllPromos();
    console.log(`✅ getAllPromos() - ${promos.length} promos trouvées`);
    
    if (promos.length > 0) {
      const firstPromo = await dataMapper.getPromoById(promos[0].id);
      console.log(`✅ getPromoById() - Promo "${firstPromo.name}" trouvée`);
      
      const students = await dataMapper.getStudentsByPromoId(promos[0].id);
      console.log(`✅ getStudentsByPromoId() - ${students.length} étudiants trouvés`);
    }
    
    // Test de la fonction getAllStudents
    console.log('\n👥 Test getAllStudents...');
    const allStudents = await getAllStudents();
    console.log(`✅ getAllStudents() - ${allStudents.length} étudiants trouvés au total`);
    
    console.log('\n🎉 Tous les tests de base de données sont passés !');
    
  } catch (error) {
    console.error('❌ Erreur lors du test de la base de données:', error.message);
    process.exit(1);
  } finally {
    await client.end();
    process.exit(0);
  }
}

// Exécuter les tests
testDatabase();