const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const app = express();

// Configura MongoDB
mongoose.connect('mongodb+srv://melanie:12345@cluster0.qgyrcfv.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Definir el esquema de usuario
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
});

const User = mongoose.model('User', userSchema);

// Configurar middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.set('view engine', 'ejs');

// Ruta para mostrar el formulario de inicio de sesión
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

// Ruta para procesar el formulario de inicio de sesión
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(401).send('Usuario no encontrado');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).send('Contraseña incorrecta');
        }

        // Autenticación exitosa
        res.send('Inicio de sesión exitoso');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error interno del servidor');
    }
});

app.listen(3001, () => {
    console.log('Servidor en funcionamiento en el puerto 3001');
});
