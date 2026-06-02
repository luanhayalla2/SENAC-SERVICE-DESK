// jobs/slaMonitor.js
/**
 * SLA Monitor Job
 * Periodically checks tickets for SLA breaches and updates them.
 * This is a simple implementation using setInterval; replace with a proper scheduler/cron in production.
 */
const { Ticket, SLA } = require('../models');

async function checkSLA() {
  try {
    const tickets = await Ticket.findAll({ where: { status: 'open' }, include: [SLA] });
    const now = new Date();
    for (const ticket of tickets) {
      if (ticket.SLA && !ticket.SLA.breached) {
        const deadline = new Date(ticket.createdAt);
        deadline.setHours(deadline.getHours() + ticket.SLA.targetHours);
        if (now > deadline) {
          await ticket.update({ status: 'breached' });
          await ticket.SLA.update({ breached: true, breachedAt: now });
          console.log(`Ticket ${ticket.id} breached SLA.`);
        }
      }
    }
  } catch (err) {
    console.error('Error in SLA monitor:', err);
  }
}

// Run every 5 minutes (300000 ms)
setInterval(checkSLA, 5 * 60 * 1000);

module.exports = { checkSLA };
