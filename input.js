let connection;
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  
  return stdin;
};

const handleUserInput = function(key) {
  switch (key)  {
    case '\u0003': process.exit();
    case 'w': connection.write('Move: up');
      break;
    case 'a': connection.write('Move: left');
      break;
    case 'd': connection.write('Move:right');
      break;
    case 's': connection.write('Move: down');
      break;
    case 'o': connection.write('Oh...no!');
      break;
    case 'p': connection.write('Nooooooooo!');
      break;       
    
  }
}
  module.exports = setupInput;