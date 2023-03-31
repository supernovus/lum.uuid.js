/**
 * Export the UUID functions to the `Math` object.
 * 
 * Adds `Math.uuid(), Math.uuidFast(), Math.uuidCompact()` functions.
 * 
 * @param {object} [math=Math] The `Math` object to export to. 
 */
module.exports = function(math=Math)
{
  math.uuid = require('./index');
  math.uuidFast = require('./fast');
  math.uuidCompact = require('./compact');
}
