const { AuditLog } = require('../models');
const logger = require('../utils/logger');

/**
 * AuditService
 * Provides methods to record audit logs for user actions across the system.
 * Each entry captures who performed the action, what was done, on which entity,
 * and any additional payload for context.
 */
class AuditService {
  /**
   * Create a new audit log entry.
   * @param {number} userId - ID of the user performing the action.
   * @param {string} action - Action name (e.g., 'CREATE', 'UPDATE', 'DELETE').
   * @param {string} entity - Entity name (e.g., 'Ticket', 'User').
   * @param {number|null} entityId - Primary key of the affected entity.
   * @param {object} [payload] - Optional additional data for the audit record.
   * @returns {Promise<AuditLog>} The created audit record.
   */
  static async logAction(userId, action, entity, entityId = null, payload = {}) {
    try {
      const audit = await AuditLog.create({
        userId,
        action,
        entity,
        entityId,
        payload,
      });
      logger.info(`Audit log created: ${action} on ${entity} (ID: ${entityId}) by user ${userId}`);
      return audit;
    } catch (err) {
      // Log the error but do not crash the application.
      logger.error('Failed to create audit log', err);
      throw err;
    }
  }
}

module.exports = AuditService;
