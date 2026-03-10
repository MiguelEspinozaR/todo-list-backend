const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    mensaje: "¡Servidor funcionando desde Docker!",
    estado: "En desarrollo",
    proyecto: "To-Do List Backend"
  });
});


app.listen(port, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${port}`);
});