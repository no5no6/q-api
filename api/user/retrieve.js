import User from '../../models/user'

app.get('/users', async (req, res) => {
  const user = await User.retrieve()

  res.send(user)
})