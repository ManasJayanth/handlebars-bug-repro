var tpl = require('fs').readFileSync('tpl').toString();;
var Handlebars = require('handlebars');
console.log(Handlebars.compile(tpl)({foo: 'value'}));
