var str = 'hello';
var letter = 'l';

function count(str, letter, counter = 0) {
  if(str[0] === letter) {
    counter++;
  }
  if(str.length === 1) {
    return counter;
  }
  if(str.length > 1) {
    str = str.slice(1);
    return count(str, letter, counter);
  }
}

var result = count(str, letter);
console.log(result);