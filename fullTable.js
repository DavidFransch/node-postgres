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
.then(() => client.query("insert into employees values ($1, $2)", [1001, 'Connor']))
.then(() => client.query("select * from employees"))
.then((results) => console.table(results.rows))
.catch(e => console.log(e))
.finally(() => client.end())

