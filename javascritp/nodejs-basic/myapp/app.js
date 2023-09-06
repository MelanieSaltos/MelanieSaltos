const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://melanie:bartolo2003@cluster0.hszw1vp.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('Error de conexión a MongoDB:', error);
});

db.once('open', () => {
  console.log('Conexión exitosa a MongoDB ');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const UsuarioSchema = new mongoose.Schema({
  name: String,
  email: String,
  password:String,
});

const UserModel = mongoose.model('Usuario', UsuarioSchema);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/login', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Crear un nuevo documento de usuario y guardarlo en la colección "usuarios"
    const nuevoUsuario = new UserModel({ name, email, password });
    await nuevoUsuario.save();

    res.send('Datos de inicio de sesión enviados');
  } catch (error) {
    console.error('Error al guardar datos:', error);
    res.status(500).send('Error interno del servidor');
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
