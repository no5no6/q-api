const Questionnaire = require('../../models/questionnaire/index')
const { sendSuccess, sendError } = require('../../utils/responseHandler')
const { authenticateToken } = require('../../middleware/userValidate')

app.get('/questionnaires',authenticateToken, async (req, res) => {
  
  try {
    const questionnaires = await Questionnaire.retrieve()
    sendSuccess(res, questionnaires) 
  } catch (error) {
    sendError(res, 500, error.message)
  }
})