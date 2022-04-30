const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if (domains.length === 0){
    return {}
  }
  let result = {}
  let accum = []
  for (let domain of domains){
    let part = domain.split(".").reverse()
    let combo = ""
    for (let element of part){
      combo += `.${element}`
      accum.push(combo)
    }
  }
  accum.forEach((el) => {
    if (result.hasOwnProperty(el)){
      result[el] += 1
    } else {
      result[el] = 1
    }
  })
  return result
}

module.exports = {
  getDNSStats
};
