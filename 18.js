function swapCase(str) {
    var result = '';
    for (var i = 0; i < str.length; i++) {
      if (str[i] === str[i].toUpperCase()) {
        result += str[i].toLowerCase();
      } else {
        result += str[i].toUpperCase();
      }
    }
    return result;
  }
  
  console.log(swapCase('Hello World'));
  