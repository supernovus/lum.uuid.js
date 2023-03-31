"use strict";

/**
 * A more compact, but less performant, RFC4122v4 solution.
 * 
 * @returns {string} A UUID v4 string
 */
module.exports = function() 
{
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) 
  {
    let r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
    return v.toString(16);
  });
}
