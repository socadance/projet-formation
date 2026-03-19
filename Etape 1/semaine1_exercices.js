// ============================================
// SEMAINE 1 — JavaScript moderne
// ============================================
// Pour tester : ouvre un terminal dans VS Code
// et tape : node semaine1.js


// ─────────────────────────────────────────
// BLOC 1 — Arrow functions
// ─────────────────────────────────────────

// Voici une fonction classique :
function direBonjour(prenom) {
  return "Bonjour " + prenom;
}

// TODO 1 : Réécris cette fonction en arrow function
// (stocke-la dans une variable "direBonjourArrow")

const direBonjourArrow = (prenom) => "Bonjour " + prenom;

// TODO 2 : Écris une arrow function "multiplier"
// qui prend deux nombres et retourne leur produit

const multiplier = (a, b) => a * b;

// TODO 3 : Écris une arrow function "estMajeur"
// qui prend un âge et retourne true si >= 18, false sinon

const estMajeur = (age) => age >= 18;

// Pour tester tes fonctions, décommente ces lignes :
//console.log(direBonjourArrow("Jonathan"))  // "Bonjour Jonathan"
//console.log(multiplier(4, 5))              // 20
//console.log(estMajeur(20))                 // true
//console.log(estMajeur(15))                 // false


// ─────────────────────────────────────────
// BLOC 2 — Template literals
// ─────────────────────────────────────────

// const utilisateur = {
//   prenom: "Jonathan",
//   age: 35,
//   ville: "Marseille"
// };

// TODO 4 : Utilise un template literal (backticks ``)
// pour afficher : "Bonjour, je m'appelle Jonathan, j'ai 35 ans et j'habite à Marseille."
// (utilise les propriétés de l'objet utilisateur, pas de texte en dur)

// const presentation = `Bonjour, je m'appelle ${utilisateur.prenom}, j'ai ${utilisateur.age} ans et j'habite à ${utilisateur.ville}.`;
// console.log(presentation)
// console.log(`${utilisateur.prenom} est "${estMajeur(utilisateur.age) ? "majeur" : "mineur"}".`)

// ─────────────────────────────────────────
// BLOC 3 — Destructuring
// ─────────────────────────────────────────

// const projet = {
//   nom: "App météo",
//   techno: "React",
//   duree: 4,
//   auteur: {
//     prenom: "Jonathan",
//     ville: "Marseille"
//   }
// };

// TODO 5 : Extrais "nom" et "techno" avec le destructuring

// const { nom, techno } = projet;
// console.log(nom)    // "App météo"
// console.log(techno) // "React"

// TODO 6 : Extrais aussi "prenom" depuis l'objet auteur
// (destructuring imbriqué)

// const { auteur: { prenom } } = projet;
// console.log(prenom) // "Jonathan"

// BONUS — Destructuring de tableau
const couleurs = ["rouge", "vert", "bleu"];

// TODO 7 : Extrais la première et la deuxième couleur
// dans deux variables "couleur1" et "couleur2"

// const [couleur1, couleur2] = couleurs;
// console.log(couleur1) // "rouge"
// console.log(couleur2) // "vert"


// ============================================
// SEMAINE 1 — Exercices avancés
// Combine : arrow functions, ternaire,
// template literals, destructuring
// ============================================


// ─────────────────────────────────────────
// EXERCICE 1 — Carte de profil
// ─────────────────────────────────────────
// Données :
const employe = {
  identite: {
    prenom: "Sophie",
    nom: "Durand",
    age: 42
  },
  poste: {
    titre: "Développeuse",
    seniorite: "senior",
    remote: true
  },
  salaire: 52000
};

// TODO 1a : En UNE seule ligne de destructuring,
// extrais : prenom, nom, age, titre, remote
// (depuis leurs objets respectifs)

const { identite: { prenom, nom, age }, poste: { titre, remote } } = employe;

// TODO 1b : Écris une arrow function "carteEmploye"
// qui prend un employé et retourne cette phrase :
// "Sophie Durand (42 ans) — Développeuse senior | Télétravail : Oui"
// Utilise un ternaire pour Oui/Non selon remote
// et un template literal pour construire la phrase

const presentation = `Bonjour, je m'appelle ${employe.prenom}, j'ai ${employe.age} ans et j'habite à ${employe.ville}.`;

//Sans destructuring
const carteEmploye = (employe) => `${employe.identite.prenom} ${employe.identite.nom} ( ${employe.identite.age} ) - ${employe.poste.titre} ${employe.poste.seniorite} | ${employe.poste.remote ? "Oui" : "Non"}`
console.log(carteEmploye(employe))

//Avec destructuring
const carteEmploye2 = (employe) => {
  const { identite: { prenom, nom, age }, poste: { titre, seniorite, remote } } = employe;
  return `${prenom} ${nom} ( ${age} ) - ${titre} ${seniorite} | ${remote ? "Oui" : "Non"}`
}

// ─────────────────────────────────────────
// EXERCICE 2 — Analyse de commandes
// ─────────────────────────────────────────
const commandes = [
  { id: 1, client: "Alice", montant: 120, statut: "livree" },
  { id: 2, client: "Bob", montant: 340, statut: "en_cours" },
  { id: 3, client: "Clara", montant: 89, statut: "livree" },
  { id: 4, client: "David", montant: 560, statut: "annulee" },
];

// TODO 2a : Écris une arrow function "resumeCommande"
// qui prend UNE commande et retourne :
// "Commande #1 — Alice : 120€ [LIVRÉE]"
// Le statut doit être en majuscules et entre crochets
// (astuce : "livree".toUpperCase() → "LIVREE")

const resumeCommande = (commandes) => {
  const { id, client, montant, statut } = commandes;
  return `Commande #${id} - ${client} : ${montant}€ [${statut.toUpperCase()}]`;
}

// console.log(resumeCommande(commandes[0]))
// console.log(resumeCommande(commandes[1]))

// TODO 2b : Écris une arrow function "commandesLivrees"
// qui prend le tableau commandes et retourne
// uniquement les commandes avec statut "livree"
// (sans utiliser filter pour l'instant — juste avec ce qu'on a vu)

const commandesLivrees = (commandes) => {
  const monTableauDeCommandes = [];

  for (const commande of commandes) {
    if (commande.statut === "livree")
      monTableauDeCommandes.push(commande);
  }
  return monTableauDeCommandes
}

//console.log(resumeCommande(commandes[0]))
//console.log(commandesLivrees(commandes))


// ─────────────────────────────────────────
// EXERCICE 3 — Le plus dur
// ─────────────────────────────────────────
const equipe = [
  { prenom: "Lucas", role: "dev", xp: 3 },
  { prenom: "Marie", role: "design", xp: 7 },
  { prenom: "Karim", role: "dev", xp: 5 },
  { prenom: "Inès", role: "dev", xp: 1 },
  { prenom: "Paul", role: "product", xp: 4 },
];

// TODO 3 : Écris une arrow function "rapportEquipe"
// qui prend le tableau equipe et affiche dans la console
// une ligne par membre DEV uniquement, sous cette forme :
// "👨‍💻 Lucas — 3 ans d'XP (junior)"
// "👨‍💻 Karim — 5 ans d'XP (confirmé)"
// "👨‍💻 Inès — 1 ans d'XP (junior)"
//
// Règles de seniorité :
// < 3 ans → "junior"
// 3 à 6 ans → "confirmé"
// > 6 ans → "senior"
//
// Indice : tu peux utiliser une boucle for...of
// for (const membre of equipe) { ... }

// rapportEquipe(equipe)

const rapportEquipe = (equipe) => {
  const monTableauEquipe = [];
  let niveau = ''

  for (const {prenom, role, xp} of equipe) {
    if (role === 'dev') {
      if (xp > 6) {
        niveau = 'Senior';
      } else if (xp > 3) {
        niveau = 'Confirmé';
      } else {
        niveau = 'Junior';
      }
       monTableauEquipe.push(`${prenom} - ${xp} ans d'XP (${niveau})`);
    }
  }
  return monTableauEquipe;
}

console.log(rapportEquipe(equipe))