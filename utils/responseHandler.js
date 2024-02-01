function sendResponse(res, statusCode, success, data, message) {
  const response = {
    success,
    message,
    data,
  };
  
  // 过滤掉未定义的字段
  Object.keys(response).forEach(key => response[key] === undefined && delete response[key]);
  
  res.status(statusCode).json(response);
}

function sendSuccess(res, data, message) {
  sendResponse(res, 200, true, data, message);
}

function sendError(res, statusCode, message) {
  sendResponse(res, statusCode, false, null, message);
}

module.exports = { sendSuccess, sendError };