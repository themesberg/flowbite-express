import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';

const app = express()
const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, '/public/')))

// set view engine and view path
app.set('views', './src/views')
app.set('view engine', 'ejs')
// app.set('view engine', 'pug')
// app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  const title = 'Flowbite-Express'
  res.render('index', { title: title })
})

app.get('/alerts', (req, res) => {
  const title = 'Flowbite-Express: Alerts'
  res.render('alerts', { title: title })
})

app.get('/accordion', (req, res) => {
  const title = 'Flowbite-Express: Accordion'
  res.render('accordion', { title: title })
})


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
