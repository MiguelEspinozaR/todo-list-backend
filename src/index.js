const express = require('express');
const app = express();
app.use(express.json());

// Usamos las rutasque son una vrg
const taskRoutes = require('./routes/task.routes');
app.use('/tareas', taskRoutes);

app.listen(3000, '0.0.0.0', () => console.log('🚀 Server running on port 3000'));

