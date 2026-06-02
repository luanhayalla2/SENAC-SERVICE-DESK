// services/reportService.js
/**
 * Service responsible for generating various reports for the Service Desk.
 * This placeholder provides simple aggregation functions; in a real system you would
 * likely use raw SQL or a reporting library for performance.
 */
const { Ticket, Category, SubCategory, SLA } = require('../models'); // assuming models exported via index.js

/**
 * Get total ticket count per status.
 * @returns {Promise<Array<{status: string, count: number}>>}
 */
async function ticketsByStatus() {
  const result = await Ticket.findAll({
    attributes: ['status', [Ticket.sequelize.fn('COUNT', Ticket.sequelize.col('id')), 'count']],
    group: ['status'],
    raw: true,
  });
  return result;
}

/**
 * Get average SLA breach time (in hours) for tickets.
 * @returns {Promise<number>} Average hours.
 */
async function averageSlaBreachTime() {
  const breached = await SLA.findAll({
    where: { breached: true },
    attributes: [
      [SLA.sequelize.fn('AVG', SLA.sequelize.literal('TIMESTAMPDIFF(HOUR, createdAt, breachedAt)')), 'avgHours'],
    ],
    raw: true,
  });
  return breached[0]?.avgHours || 0;
}

module.exports = { ticketsByStatus, averageSlaBreachTime };
