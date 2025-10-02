// routes/quote.js
const express = require("express");
const router = express.Router();
const { sendQuoteEmail } = require("../utils/emailService"); // Ruta donde pusiste la función del paso 3

router.post("/api/quote", async (req, res) => {
  try {
    await sendQuoteEmail(req.body);
    res.status(200).json({ success: true, message: "Solicitud enviada con éxito" });
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    res.status(500).json({ success: false, message: "Error al enviar la solicitud" });
  }
});

module.exports = router;
