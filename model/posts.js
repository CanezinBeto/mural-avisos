module.exports = {
  posts: [{ id: '1', title: 'Teste Mural', description: 'Descrição Tste' }],
  getAll() {
    return this.posts
  },
  newPost(title, description) {
    this.posts.push({ id: generateID(), title, description })
  },
}

function generateID() {
  return Math.random().toString(36).substring(2, 9)
}
