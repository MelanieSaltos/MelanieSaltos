// app.js (o el nombre de tu archivo principal de Node.js)
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // Elige el puerto que desees

// Configura la conexión a MongoDB
mongoose.connect('mongodb+srv://melanie:bartolo2003@cluster0.hszw1vp.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on('error', (error) => {
  console.error('Error de conexión a MongoDB', error);
});

db.once('open', () => {
  console.log('Conexión exitosa a MongoDB ');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const User = mongoose.model('User', {
    name: String,
    email: String,
    password: String,
});

app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para el registro de usuarios
app.post('/registro', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Crea un nuevo usuario y guárdalo en la base de datos
        const user = new User({ name, email, password });
        await user.save();

        res.send('Registro exitoso.');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error en el registro.');
    }
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});