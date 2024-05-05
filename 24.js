var jsonString = '{"name": "John", "age": }';

try {
  var jsonData = JSON.parse(jsonString);
  console.log(jsonData);
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log('Invalid JSON string');
  } else {
    console.log('An error occurred:', error.message);
  }  } 