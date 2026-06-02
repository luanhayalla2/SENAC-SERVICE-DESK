// jobs/cleanupLogs.js
/**
 * Cleanup Logs Job
 * Periodically removes old log files from the logs directory.
 * Adjust the path and retention policy as needed.
 */
const fs = require('fs');
const path = require('path');

const LOGS_DIR = path.join(__dirname, '..', '..', 'logs'); // adjust if logs directory differs
const RETENTION_DAYS = 30; // keep logs for 30 days

function deleteOldLogs() {
  fs.readdir(LOGS_DIR, (err, files) => {
    if (err) {
      console.error('Failed to read logs directory:', err);
      return;
    }
    const now = Date.now();
    files.forEach((file) => {
      const filePath = path.join(LOGS_DIR, file);
      fs.stat(filePath, (errStat, stats) => {
        if (errStat) return;
        const ageDays = (now - stats.mtimeMs) / (1000 * 60 * 60 * 24);
        if (ageDays > RETENTION_DAYS) {
          fs.unlink(filePath, (errUnlink) => {
            if (errUnlink) console.error('Failed to delete log:', filePath, errUnlink);
            else console.log('Deleted old log:', filePath);
          });
        }
      });
    });
  });
}

// Run daily
setInterval(deleteOldLogs, 24 * 60 * 60 * 1000);

module.exports = { deleteOldLogs };
