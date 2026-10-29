// produits.js
const produits = [
  { id: 1, nom: 'Clavier', categorie: 'Accessoires', prix: 120, stock: 5 },
  { id: 2, nom: 'Souris', categorie: 'Accessoires', prix: 80, stock: 8 },
  { id: 3, nom: 'Écran', categorie: 'Informatique', prix: 900, stock: 0 },
  { id: 4, nom: 'Casque', categorie: 'Accessoires', prix: 240, stock: 3 }
];
// Fonction pour vérifier la validité d'un produit( défis supplémentaires)
function estValide(produit) {
  // Vérifie que le produit a un prix et un stock valides (non négatifs)
  return Number.isFinite(produit.prix) && produit.prix >= 0 && 
         Number.isFinite(produit.stock) && produit.stock >= 0;
}
// Affichage du catalogue complet
console.log('Catalogue complet :');
produits.forEach(produit => {
  if (estValide(produit)) {
    console.log(`${produit.nom} : ${produit.prix} MAD`);
  }
});


// Filtrage des produits disponibles (stock > 0)
const disponibles = produits.filter((produit) => produit.stock > 0);
console.log('\n--- Disponibilité ---');
console.log(`Nombre de produits disponibles : ${disponibles.length}`);


// Calcul de la valeur totale du stock
const valeurStock = produits.reduce((somme, produit) => somme + (produit.prix * produit.stock), 0);
console.log('\n--- Valeur du Stock ---');
console.log(`Valeur totale : ${valeurStock} MAD`);

// Recherche du produit le moins cher parmi les produits disponibles
console.log('\n--- Produit le moins cher (disponible) ---');

if (disponibles.length === 0) {
    console.log("Aucun produit n'est disponible actuellement.");
} else {
    // reduce here to find the product with the lowest price
    const moinsCher = disponibles.reduce((min, produit) => (produit.prix < min.prix ? produit : min), disponibles[0]);
    
    // Déstructuration (Défi supplémentaire)
    const { nom, prix } = moinsCher;
    
    console.log(`Le produit le moins cher est : ${nom} à ${prix} MAD`);
}
// Génération d'un résumé des produits
console.log('\n--- Résumé ---');

const resume = produits.map((produit) => `${produit.nom} - ${produit.prix} MAD - ${produit.stock} unités`);

resume.forEach((ligne) => console.log(ligne));