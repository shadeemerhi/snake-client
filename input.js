const connect = require("./client");

let connection;

const handleUserInput = (inputKey) => {
  if (inputKey === '\u0003') {
    process.exit();
  }

  if (inputKey === 'w') {
    connection.write('Move: up');
  }
  if (inputKey === 'a') {
    connection.write('Move: left');
  }
  if (inputKey === 's') {
    connection.write('Move: down');
  }
  if (inputKey === 'd') {
    connection.write('Move: right');
  }

  // Sending messages
  if(inputKey === '-') {
    connection.write('Say: LOL');
  }
  if(inputKey === '=') {
    connection.write('Say: u r garbo');
  }
  if(inputKey === '\\') {
    connection.write('Say: Yum food');
  }
}

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', handleUserInput);

  return stdin;
}

module.exports = setupInput;