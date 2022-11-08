# Node-Postgres

## Spinning up Postgres instances and PGAdmin with Docker

Spin up postgres instance:\
`docker run -e POSTGRES_PASSWORD="password" -p 5432:5432 --name pg postgres`

Spin up pgadmin:\
`docker run -e PGADMIN_DEFAULT_EMAIL="david" -e PGADMIN_DEFAULT_PASSWORD="password" -p 5555:80 —-name pgadmin dpage/pgadmin4 `

Access pgadmin from browser:\
`http://davidfr-pc:5555/browser/`


Using [node-postgres](https://node-postgres.com/) library 

- Connecting to database
```javascript
const { Client } = require('pg')
const client = new Client({
  user: "postgres",
  password: "..",
  host: "..",
  port: 5432,
  database: "daviddb"
})


client.connect()
.then(() => console.log('Connected successfully'))
.then(() => client.query("select * from employees where name = $1", ["David"]))
.then((results) => console.table(results.rows))
.catch(e => console.log(e))
.finally(() => client.end())
```