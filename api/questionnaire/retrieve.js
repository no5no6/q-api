import Questionnaire from '../../models/questionnaire'

app.get('/questionnaires', async (req, res) => {
  const questionnaires = await Questionnaire.retrieve()

  res.send(questionnaires)
})