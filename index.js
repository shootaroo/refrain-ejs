var ejs = require('ejs');
var fast = require('fast.js');

module.exports = function (text, content, callback) {
  callback(null, ejs.render(text, fast.assign(content, {
    filename: content.filePath
  })));
};
