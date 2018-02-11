
const snakeCase = function(string) {
  string = string.replace(/\.\./g, " ");
  
  if (!string.includes(" ")) {
    string = string.replace(/([A-Z.])/g, " $&");
  }

  return string
  .trim()
  .toLowerCase()
  .replace(/[,\?\.]/g, "")
  .replace(/\-/g, " ")
  .split(" ")
  .join("_");
};
module.exports = snakeCase;
