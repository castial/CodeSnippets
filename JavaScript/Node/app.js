const url = require('url')

const str = 'http://sh.eletech.cn:44480/vlanplay?wave=5CAF54601627494'

const parseUrl = url.parse(str, true)
console.log(parseUrl.query.wave)
