const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!'
  }
  if (!(date instanceof Date) || Object.entries(date).length > 0){
    throw Error('Invalid date!');
  }
  let mm = date.getMonth()
  if(mm === 11 || mm === 0 || mm === 1){
    return 'winter'
  }
  if(mm === 2 || mm === 3 || mm === 4){
    return 'spring'
  }
  if(mm === 5 || mm === 6 || mm === 7){
    return 'summer'
  }
  return 'autumn'
}

module.exports = {
  getSeason
};
