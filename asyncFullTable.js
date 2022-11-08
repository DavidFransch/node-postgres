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
    console.log("Connected successfully.")
    const results = await client.query("select * from employees") 
    console.table(results.rows)
  } catch(e) {
    console.log(`Something happened ${e}`)
  }
  finally {
    await client.end()
    console.log("Client disconnected successfully.")
  }
}


execute()