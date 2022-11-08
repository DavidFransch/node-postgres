const { Client } = require('pg')

const client = new Client({
  user: "postgres",
  password: "password",
  host: "192.168.204.71",
  port: 5432,
  database: "daviddb"
})

async function execute() {
  try {
    await client.connect()
    await client.query("BEGIN")
    await client.query("update employees set name = $1", ['Ray'] )
    const { rows } = await client.query("select * from employees")
    console.table(rows)
    await client.query("insert into employees values ($1,$2)", [1008, 'Mat'])
    console.log("Inserted a new row")
    await client.query("COMMIT")

  } catch(e) {
    console.log(`Something went wrong ${e}`)
    await client.query("ROLLBACK") 
  }
  finally {
    await client.end()
    console.log('Client disconnected successfully')
  }
}

execute()