// utils/formatter.js
/**
 * Simple formatter utilities.
 * Add more as needed (currency, dates, etc.).
 */

function formatDate(date) {
  if (!(date instanceof Date)) date = new Date(date);
  return date.toISOString().split('T')[0]; // YYYY-MM-DD
}

function formatDateTime(date) {
  if (!(date instanceof Date)) date = new Date(date);
  return date.toISOString().replace('T', ' ').split('.')[0]; // YYYY-MM-DD HH:MM:SS
}

module.exports = { formatDate, formatDateTime };
