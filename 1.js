function findAllOccurrences(string, word) {
    const indexes = [];
    let index = string.indexOf(word);

    while (index !== -1) {
        indexes.push(index);
        index = string.indexOf(word, index + 1);
    }

    return indexes;
}

// Example usage:
const text = "Hello world, hello universe, hello everyone!";
const word = "hello";
const positions = findAllOccurrences(text.toLowerCase(), word.toLowerCase());
console.log(`The word "${word}" occurs at positions: ${positions}`);
