var stim = require('./lib');

var client = new stim.Client({
  host: 'localhost',
  port: '8091',
  user: 'rpcuser',
  pass: 'rpcpassword'
});

client.getBalance('*', 6, function(err, balance) {
  if (err) return console.log(err);
  console.log('Balance:', balance);
});

client.cmd('getbalance', '*', 6, function(err, balance){
  if (err) return console.log(err);
  console.log('Balance:', balance);
});

console.log('Master node info:');

client.masternode('list', 'activeseconds', '149.28.164.192', function(err, activeseconds){
  if (err) return console.log(err);
  console.log(activeseconds);
});

client.masternode('count', function(err, count){
  if (err) return console.log(err);
  console.log(count);
});


