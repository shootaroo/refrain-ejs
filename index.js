var _ = require('lodash');
var ejs = require('ejs');

module.exports = function (text, content, callback) {
  callback(null, ejs.render(text, _.assign(content, {
    filename: content.filePath,
    _: require('lodash') //TODO
  })));
};
