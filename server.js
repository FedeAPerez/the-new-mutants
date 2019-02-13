// server.js
const PORT = Number(process.env.PORT);
const app = require('./config/app');

app.listen((PORT), () => {
	console.log('Se está ejecutando en el puerto: ' + PORT);
});     
          