const express = require('express')
const app = express()
const PORT = 3000
const posts = [{ id: '1', title: 'Teste Mural', description: 'Descrição Tste' }]

app.get('/all', (req, res) => {
  res.json(JSON.stringify(posts))
})

app.post('/new', express.json(), (req, res) => {
  let id = generateID()
  let title = req.body.title
  let description = req.body.description

  posts.push({ id, title, description })
  res.send('Post Adicionado')
})

function generateID() {
  return Math.random().toString(36).substring(2, 9)
}

app.listen(PORT, () => console.log('Server running on Port: ', PORT))
