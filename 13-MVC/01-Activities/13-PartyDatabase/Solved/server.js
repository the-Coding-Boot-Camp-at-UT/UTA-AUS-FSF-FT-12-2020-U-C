const orm = require('./config/orm.js');

// For each of the following select methods, a string argument containing wildcard character ("*")
// could work in most environments, but some MySQL servers (like MAMP) will return an error.

// Console log all the party_name's.
orm.select('party_name', 'parties');

// Console log all the client_name's.
orm.select('client_name', 'clients');

// Console log all the parties that have a party-type of grown-up.
orm.selectWhere('parties', 'party_type', 'grown-up');

// Console log all the clients and their parties.
orm.leftJoin(
  ['client_name', 'party_name'],
  'clients',
  'parties',
  'id',
  'client_id'
);
