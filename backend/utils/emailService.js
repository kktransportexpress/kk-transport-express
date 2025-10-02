// utils/emailService.js
const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465,
  secure: true, // true para SSL
  auth: {
    user: process.env.ZOHOMAIL_USER,
    pass: process.env.ZOHOMAIL_PASS,
  },
});

const sendQuoteEmail = async (formData) => {
  const mailOptions = {
    from: `"K and K Transport Express" <${process.env.ZOHOMAIL_USER}>`,
    to: process.env.ZOHOMAIL_USER, // también podrías enviar a otra cuenta
    subject: "Nueva Solicitud de Cotización",
    html: `
      <h3>Detalles del Cliente</h3>
      <p><strong>Nombre:</strong> ${formData.name}</p>
      <p><strong>Teléfono:</strong> ${formData.phone}</p>
      <p><strong>Correo:</strong> ${formData.email}</p>
      <p><strong>Origen:</strong> ${formData.origin}</p>
      <p><strong>Destino:</strong> ${formData.destination}</p>
      <p><strong>Fecha de Recogida:</strong> ${formData.pickupDate}</p>
      <p><strong>Hora de Recogida:</strong> ${formData.pickupTime}</p>
      <p><strong>Fecha de Entrega:</strong> ${formData.deliveryDate}</p>
      <p><strong>Hora de Entrega:</strong> ${formData.deliveryTime}</p>
      <p><strong>Tipo de Carga:</strong> ${formData.cargoType}</p>
      <p><strong>Mensaje:</strong> ${formData.message}</p>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return info;
  } catch (error) {
    throw error;
  }
};

module.exports = { sendQuoteEmail };
