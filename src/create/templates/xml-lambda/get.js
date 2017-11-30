var arc = require('@architect/functions')

function route(req, res) {
  console.log(JSON.stringify(req, null, 2))
  res({
    xml: '<?xml version="1.0" encoding="UTF-8"?><hello>world</hello>'
  })
}

exports.handler = arc.xml.get(route)
