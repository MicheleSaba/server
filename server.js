const Q = require('@nmq/q/server');
Q.start();

const db = new Q('database');
db.monitorEvent('create');
db.monitorEvent('update');
db.monitorEvent('delete');
db.monitorEvent('get');

