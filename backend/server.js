import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());

// Configurar CORS correctamente para el frontend local
app.use(cors({
  origin: "http://localhost:5173", // Cambia si usas otro puerto en tu frontend
  methods: ["POST", "GET"],
  credentials: false,
}));

app.get("/", (req, res) => {
  res.send("Servidor backend funcionando correctamente 🚛");
});

app.post("/api/quote", async (req, res) => {
  const { name, email, phone, pickupAddress, deliveryAddress, pickupDate, deliveryDate, cargoDetails } = req.body;

  try {
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_SECURE === "true", // debe estar entre comillas si viene del .env
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});
    await transporter.sendMail({
      from: `"KK Transport Express" <${process.env.ZOHO_USER}>`,
      to: process.env.ZOHO_USER,
      subject: "Nueva Solicitud de Cotización",
      html: `
        <h3>Solicitud de Cotización</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Dirección de Recogida:</strong> ${pickupAddress}</p>
        <p><strong>Dirección de Entrega:</strong> ${deliveryAddress}</p>
        <p><strong>Fecha y Hora de Recogida:</strong> ${pickupDate}</p>
        <p><strong>Fecha y Hora de Entrega:</strong> ${deliveryDate}</p>
        <p><strong>Detalles de la Carga:</strong> ${cargoDetails}</p>
      `,
    });

    res.status(200).json({ message: "Correo enviado exitosamente" });
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    res.status(500).json({ error: "Error al enviar la solicitud" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Backend funcionando en http://localhost:${PORT}`);
});
