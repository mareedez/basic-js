const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let types = Array.isArray(members) ? members.filter(element => typeof element === "string") : []
  let cut = types.map(element => element.trim().toUpperCase())
  return cut.sort().reduce((accumulator, currentValue) => accumulator + currentValue[0], "")

}

module.exports = {
  createDreamTeam
};
