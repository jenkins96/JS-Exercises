const helpers = {};

helpers.dataSanity = (arg, action) => {
  const actions = {
  string: str =>{return str = typeof(str) ==='string' && str.trim().length > 0 ? str.trim() : false;},
  number: num =>{return num = typeof(num) ==='number' && num > 0 ? num : false;},
  array: arr =>{return arr = Array.isArray(arr) && arr.length > 0 ? arr : false;}
  };
  return actions[action]?.(arg) ?? "null or undefined";
  };



module.exports = helpers;