const { Client } = require('pg')
const client = new Client({
  user: "postgres",
  password: "password",
  host: "192.168.204.71",
  port: 5432,
  database: "daviddb"
})


client.connect()
.then(() => console.log('Connected successfully'))
.then(() => client.query("select * from employees where name = $1", ["David"]))
.then((results) => console.table(results.rows))
.catch(e => console.log(e))
.finally(() => client.end())
