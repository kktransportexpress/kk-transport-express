// server.js
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Ruta POST para recibir cotizaciones
app.post("/send-quote", async (req, res) => {
  const {
    name,
    phone,
    email,
    pickup,
    delivery,
    pickupDate,
    timePickup,
    deliveryDate,
    timeDelivery,
    cargoType,
  } = req.body;

  try {
    // Configurar el transporter de Zoho
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: "contact@kktransportexpress.com",
        pass: "21Q0GVUuKMZK",
      },
    });

    const mailOptions = {
      from: '"K and K Transport Express" <contact@kktransportexpress.com>',
      to: "contact@kktransportexpress.com",
      subject: "Nueva solicitud de cotización",
      html: `
        <h3>Datos del Cliente:</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Dirección de Recogida:</strong> ${pickup}</p>
        <p><strong>Dirección de Entrega:</strong> ${delivery}</p>
        <p><strong>Fecha y Hora de Recogida:</strong> ${pickupDate} ${timePickup}</p>
        <p><strong>Fecha y Hora de Entrega:</strong> ${deliveryDate} ${timeDelivery}</p>
        <p><strong>Tipo de Carga:</strong> ${cargoType}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Cotización enviada con éxito." });
  } catch (error) {
    console.error("Error al enviar email:", error);
    res.status(500).json({ message: "Error al enviar la cotización." });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
