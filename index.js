var _ = require('lodash');
var ejs = require('ejs');

module.exports = function (text, content, callback) {
  callback(null, ejs.render(text, _.assign(content, {
    require: require,
    _: require('lodash') //TODO
  }), _.assign({
    filename: content.filePath
  }, this.options.ejs)));
};
