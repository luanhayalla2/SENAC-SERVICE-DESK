const nodemailer = require('nodemailer');

// Load environment variables (ensure .env file includes these variables)
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: parseInt(process.env.MAIL_PORT, 10) || 587,
  secure: process.env.MAIL_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

/**
 * Send an email using the configured transporter.
 * @param {Object} options - Mail options (to, subject, html/text, attachments, etc.)
 * @returns {Promise} Resolves on success, rejects on error.
 */
const sendMail = async (options) => {
  try {
    const info = await transporter.sendMail(options);
    console.log('Mail sent: %s', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending mail:', error);
    throw error;
  }
};

module.exports = { sendMail, transporter };
