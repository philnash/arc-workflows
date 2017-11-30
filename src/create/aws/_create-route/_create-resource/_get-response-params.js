module.exports = function _getReponseParams(type) {
  var responseParams = {
    'html': {
      'method.response.header.Content-Type': "'text/html; charset=utf-8'",
      'method.response.header.Set-Cookie': 'integration.response.body.cookie',
      'method.response.header.Location': 'integration.response.body.errorMessage',
    },
    'json': {
      'method.response.header.Content-Type': "'application/json'",
      'method.response.header.Set-Cookie': 'integration.response.body.cookie',
      'method.response.header.Location': 'integration.response.body.errorMessage',
    },
    'xml': {
      'method.response.header.Content-Type': "'application/xml'",
      'method.response.header.Set-Cookie': 'integration.response.body.cookie',
      'method.response.header.Location': 'integration.response.body.errorMessage',
    }
  };
  return responseParams[type];
}
