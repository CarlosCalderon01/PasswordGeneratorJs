const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pregunta al usuario
rl.question('Ingrese un número: ', (numeroIngresado) => {
  // El valor ingresado por el usuario está en la variable 'numeroIngresado'
  console.log(`Número ingresado: ${numeroIngresado}`);

  // Cierra la interfaz de lectura
  rl.close();
});

// Evento cuando la interfaz se cierra
rl.on('close', () => {
  console.log('¡Hasta luego!');
  process.exit(0);
});
