// services/routingService.js
/**
 * Service responsible for determining the support level (N1/N2/N3) based on the ticket category.
 * This is a simple example; in production you would likely load a mapping from DB or config.
 */
const levelMap = {
  // Example category -> level mapping
  printer: 'N1',
  network: 'N2',
  database: 'N3',
};

function getSupportLevel(categoryKey) {
  return levelMap[categoryKey] || 'N1'; // default to N1 if not found
}

module.exports = { getSupportLevel };
