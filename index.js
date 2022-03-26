const express = require('express')
const app = express()
const PORT = 3000
const posts = [
  { id: '1', title: 'Teste Mural', description: 'Descrição Tste' },
  { id: '1', title: 'Teste Mural', description: 'Descrição Tste' },
  { id: '1', title: 'Teste Mural', description: 'Descrição Tste' },
  { id: '1', title: 'Teste Mural', description: 'Descrição Tste' },
]

app.get('/all', (req, res) => {
  res.json(JSON.stringify(posts))
})

app.post('/new', (req, res) => {})

app.listen(PORT, () => console.log('Server running on Port: ', PORT))
