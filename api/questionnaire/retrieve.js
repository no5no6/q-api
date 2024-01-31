import Questionnaire from '../../models/questionnaire/index'

app.get('/questionnaires', async (req, res) => {
  const questionnaires = await Questionnaire.retrieve()

  res.send(questionnaires)
})