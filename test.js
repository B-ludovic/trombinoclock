import "dotenv/config";
import client from "./app/db/client.js";

// Si je souhaite utiliser le mot clé `await` dans ma fonction, je dois la déclarer comme `async`
async function getAllStudents() {
  // Lorsque l'on souhaite récupérer les données de la requête, on va les chercher dans la propriété `rows`
  const result = await client.query("SELECT * FROM student;");

  const students = result.rows;

  console.log(students);

  return students;
}

getAllStudents();
