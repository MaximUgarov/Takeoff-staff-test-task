const jsonServer = require('json-server')
const auth = require('json-server-auth')

const app = jsonServer.create()
const router = jsonServer.router('db.json')
const cors = require('cors')

app.db = router.db
app.use(cors({ "origin": ["http://localhost:3000"], "credentials": true }));
app.use(auth)
app.use(router)
app.listen(3001)