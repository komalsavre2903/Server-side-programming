function parseURL(url) {
    var parser = document.createElement('a');
    parser.href = url;
    return parser;
  }
  
  var result = parseURL('https://www.example.com/path/?query=test');
  console.log(result);
  