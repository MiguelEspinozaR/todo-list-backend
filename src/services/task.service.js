const pool = require('../database');

const createTask = async (data) => {
    const { titulo } = data;
    const result = await pool.query(
        'INSERT INTO tareas (titulo) VALUES ($1) RETURNING *',
        [titulo]
    );
    return result.rows[0];
};

const getAllTasks = async () => {
    const result = await pool.query('SELECT * FROM tareas');
    return result.rows;
};

module.exports = { createTask, getAllTasks };