// ============================================
// SEMAINE 1 — JavaScript moderne
// ============================================


// ─────────────────────────────────────────
// BLOC 1 — Arrow functions
// ─────────────────────────────────────────

function direBonjour(prenom) {
  return "Bonjour " + prenom;
}

const direBonjourArrow = (prenom) => "Bonjour " + prenom;
const multiplier = (a, b) => a * b;
const estMajeur = (age) => age >= 18;

// console.log(direBonjourArrow("Jonathan"))  // "Bonjour Jonathan"
// console.log(multiplier(4, 5))              // 20
// console.log(estMajeur(20))                 // true
// console.log(estMajeur(15))                 // false


// ─────────────────────────────────────────
// BLOC 2 — Template literals
// ─────────────────────────────────────────

const utilisateur = {
  prenom: "Jonathan",
  age: 35,
  ville: "Marseille"
};

const presentation = `Bonjour, je m'appelle ${utilisateur.prenom}, j'ai ${utilisateur.age} ans et j'habite à ${utilisateur.ville}.`;
// console.log(presentation)
// console.log(`${utilisateur.prenom} est "${estMajeur(utilisateur.age) ? "majeur" : "mineur"}".`)


// ─────────────────────────────────────────
// BLOC 3 — Destructuring
// ─────────────────────────────────────────

const projet = {
  nom: "App météo",
  techno: "React",
  duree: 4,
  auteur: {
    prenom: "Jonathan",
    ville: "Marseille"
  }
};

const { nom, techno } = projet;
// console.log(nom)    // "App météo"
// console.log(techno) // "React"

const { auteur: { prenom } } = projet;
// console.log(prenom) // "Jonathan"

const couleurs = ["rouge", "vert", "bleu"];
const [couleur1, couleur2] = couleurs;
// console.log(couleur1) // "rouge"
// console.log(couleur2) // "vert"


// ============================================
// SEMAINE 1 — Exercices avancés
// ============================================


// ─────────────────────────────────────────
// EXERCICE 1 — Carte de profil
// ─────────────────────────────────────────

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

// Sans destructuring
const carteEmploye = (employe) => `${employe.identite.prenom} ${employe.identite.nom} (${employe.identite.age} ans) - ${employe.poste.titre} ${employe.poste.seniorite} | Télétravail : ${employe.poste.remote ? "Oui" : "Non"}`;

// Avec destructuring
const carteEmploye2 = (employe) => {
  const { identite: { prenom, nom, age }, poste: { titre, seniorite, remote } } = employe;
  return `${prenom} ${nom} (${age} ans) - ${titre} ${seniorite} | Télétravail : ${remote ? "Oui" : "Non"}`;
};

// console.log(carteEmploye(employe))
// console.log(carteEmploye2(employe))


// ─────────────────────────────────────────
// EXERCICE 2 — Analyse de commandes
// ─────────────────────────────────────────

const commandes = [
  { id: 1, client: "Alice", montant: 120, statut: "livree" },
  { id: 2, client: "Bob",   montant: 340, statut: "en_cours" },
  { id: 3, client: "Clara", montant: 89,  statut: "livree" },
  { id: 4, client: "David", montant: 560, statut: "annulee" },
];

const resumeCommande = (commande) => {
  const { id, client, montant, statut } = commande;
  return `Commande #${id} - ${client} : ${montant}€ [${statut.toUpperCase()}]`;
};

const commandesLivrees = (commandes) => {
  const resultat = [];
  for (const commande of commandes) {
    if (commande.statut === "livree")
      resultat.push(commande);
  }
  return resultat;
};

// console.log(resumeCommande(commandes[0]))
// console.log(commandesLivrees(commandes))


// ─────────────────────────────────────────
// EXERCICE 3 — Rapport équipe
// ─────────────────────────────────────────

const equipe = [
  { prenom: "Lucas",  role: "dev",     xp: 3 },
  { prenom: "Marie",  role: "design",  xp: 7 },
  { prenom: "Karim",  role: "dev",     xp: 5 },
  { prenom: "Inès",   role: "dev",     xp: 1 },
  { prenom: "Paul",   role: "product", xp: 4 },
];

const rapportEquipe = (equipe) => {
  const resultat = [];
  let niveau = '';

  for (const { prenom, role, xp } of equipe) {
    if (role === 'dev') {
      if (xp > 6) {
        niveau = 'Senior';
      } else if (xp >= 3) {
        niveau = 'Confirmé';
      } else {
        niveau = 'Junior';
      }
      resultat.push(`👨‍💻 ${prenom} — ${xp} ans d'XP (${niveau})`);
    }
  }
  return resultat;
};

console.log(rapportEquipe(equipe))

