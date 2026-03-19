// ============================================
// SEMAINE 2 — map, filter, reduce
// ============================================

const produits = [
  { nom: "Laptop",    prix: 999,  categorie: "tech",  enStock: true  },
  { nom: "Souris",    prix: 29,   categorie: "tech",  enStock: true  },
  { nom: "Bureau",    prix: 349,  categorie: "meuble",enStock: false },
  { nom: "Clavier",   prix: 79,   categorie: "tech",  enStock: true  },
  { nom: "Lampe",     prix: 49,   categorie: "meuble",enStock: true  },
  { nom: "Écran",     prix: 399,  categorie: "tech",  enStock: false },
];

// ─────────────────────────────────────────
// MAP — transformer chaque élément
// ─────────────────────────────────────────

// TODO 1 : Crée un tableau "nomsDesProduits"
// qui contient uniquement les noms de chaque produit //je dois push les données du tableau
// Résultat attendu : ["Laptop", "Souris", "Bureau", ...]

const nomsDesProduits = produits.map(produit => produit.nom);
console.log(nomsDesProduits)

// TODO 2 : Crée un tableau "prixTTC"
// qui contient le prix TTC de chaque produit (prix * 1.20)
// Résultat attendu : [1198.8, 34.8, 418.8, ...]

const prixTTC = produits.map(calculTVA => calculTVA.prix*1.2);
console.log(prixTTC)

// TODO 3 : Crée un tableau "etiquettes"
// qui contient une phrase pour chaque produit :
// "Laptop — 999€ (tech)"
// Utilise le destructuring dans le map

const etiquettes = produits.map(({nom, prix, categorie}) => `${nom} - ${prix} (${categorie})`);
console.log(etiquettes);

// ─────────────────────────────────────────
// FILTER — garder certains éléments
// ─────────────────────────────────────────

// TODO 4 : Crée un tableau "produitsEnStock"
// qui contient uniquement les produits disponibles

const produitsEnStock = produits.filter(produit => produit.enStock); //booléan, si true alors retourné
//console.log(produitsEnStock);

// TODO 5 : Crée un tableau "produitsTech"
// qui contient uniquement les produits de catégorie "tech"

const produitsTech = produits.filter((tri) => tri.categorie === "tech");
//console.log(produitsTech);

// TODO 6 : Crée un tableau "produitsAbordables"
// qui contient les produits en stock ET dont le prix < 100€

const produitsAbordables = produits.filter((tri) => tri.prix < 100 &&  tri.enStock);
console.log(produitsAbordables);

// ─────────────────────────────────────────
// REDUCE — calculer une valeur
// ─────────────────────────────────────────

// TODO 7 : Calcule le prix total de tous les produits
// avec reduce. Voici la structure de reduce :
// tableau.reduce((accumulateur, element) => accumulateur + element.prix, 0)
// Le "0" est la valeur de départ de l'accumulateur

const CalculateurPrix = produits.reduce((accumulateur, produit) => accumulateur + produit.prix, 0);
console.log(CalculateurPrix);

// TODO 8 : Calcule le prix moyen des produits tech
// (combine filter + reduce)

const produitsTech2 = produits.filter((tri) => tri.categorie === "tech");
const total = produitsTech2.reduce((accumulateur, produit) => accumulateur + produit.prix, 0);
const calculPrixMoyen = total / produitsTech2.length;
console.log(calculPrixMoyen);

//Code version Senior//

// const prixMoyenTech = produits
//   .filter(({ categorie }) => categorie === "tech")
//   .reduce((acc, { prix }, _, arr) => acc + prix / arr.length, 0);
// console.log(prixMoyenTech);