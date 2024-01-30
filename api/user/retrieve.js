app.get('/users', async (req, res) => {
  const User = app.models.User
  const user = await User.retrieve()

  res.send(user)
})