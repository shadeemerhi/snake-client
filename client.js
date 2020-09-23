const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8' ); 

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on('connect', () => {
    console.log('Successfully connected to the server.');
    conn.write('Name: SMM');
  });


  // Experiment - moving the snake as soon connection established
  // conn.on('connect', () => {
  //   setInterval(() => {
  //     conn.write('Move: up');
  //   }, 500);
  // });

  // conn.on('connect', () => {
  //   setInterval(() => {
  //     conn.write('Move: left');
  //   }, 200);
  // });

  return conn;
}

module.exports = connect;