const Questionnaire = require('../../models/questionnaire/index')
const { sendSuccess, sendError } = require('../../utils/responseHandler')

app.get('/questionnaires', async (req, res) => {
  
  try {
    const questionnaires = await Questionnaire.retrieve()
    sendSuccess(res, questionnaires) 
  } catch (error) {
    sendError(res, 500, error.message)
  }
})