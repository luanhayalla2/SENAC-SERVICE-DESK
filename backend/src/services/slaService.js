// services/slaService.js
/**
 * Service for handling Service Level Agreement (SLA) logic.
 * Provides functions to create SLA records, check if a ticket breached its SLA,
 * and update breach status.
 */
const { SLA } = require('../models'); // Assuming models export named models via index.js

/**
 * Create an SLA record for a ticket.
 * @param {number} ticketId - ID of the ticket.
 * @param {number} targetHours - SLA target in hours.
 * @returns {Promise<SLA>} The created SLA instance.
 */
async function createSLA(ticketId, targetHours) {
  return SLA.create({ ticketId, targetHours, breached: false });
}

/**
 * Check whether the SLA for a ticket is breached.
 * @param {SLA} sla - SLA instance.
 * @returns {boolean} True if breached.
 */
function isBreached(sla) {
  const now = new Date();
  const deadline = new Date(sla.createdAt);
  deadline.setHours(deadline.getHours() + sla.targetHours);
  return now > deadline;
}

/**
 * Evaluate and update SLA breach status for a given ticket.
 * @param {number} ticketId - Ticket identifier.
 * @returns {Promise<SLA|null>} Updated SLA or null if none.
 */
async function evaluateSLA(ticketId) {
  const sla = await SLA.findOne({ where: { ticketId } });
  if (!sla) return null;
  const breached = isBreached(sla);
  if (breached && !sla.breached) {
    await sla.update({ breached: true, breachedAt: new Date() });
  }
  return sla;
}

module.exports = { createSLA, evaluateSLA, isBreached };
