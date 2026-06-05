// services/emailService.js
/**
 * Simple email service using the project's mail configuration.
 * It leverages nodemailer (already configured in src/config/mail.js).
 * This placeholder provides a sendMail function; you can extend it with templates,
 * HTML content, attachments, etc.
 */
const nodemailer = require('nodemailer');
const mailConfig = require('../config/mail');

// Create a reusable transporter using the config settings.
const transporter = nodemailer.createTransport({
  host: mailConfig.host,
  port: mailConfig.port,
  secure: mailConfig.secure, // true for 465, false for other ports
  auth: {
    user: mailConfig.user,
    pass: mailConfig.pass,
  },
});

/**
 * Send an email.
 * @param {Object} options - Email options (to, subject, text, html, attachments, etc.)
 * @returns {Promise<Object>} Result from nodemailer.sendMail
 */
async function sendMail(options) {
  const mailOptions = {
    from: mailConfig.from, // sender address from config
    ...options,
  };
  return transporter.sendMail(mailOptions);
}

module.exports = { sendMail };
