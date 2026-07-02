const mongoose = require('mongoose');

async function connectDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log('Banco conectado');
  } catch (error) {
    console.error('Erro ao conectar ao banco');
    console.error(error);

    process.exit(1);
  }
}

module.exports = connectDatabase;