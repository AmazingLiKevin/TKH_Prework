var name_array = ["bob", "jimmy", "max b", "bernie",
  "jordan", "future hendrix"];

function sortingName(array) {
  var evenLetterNames = [];
  var oddLetterNames = [];

  for (var i = 0; i < array.length; i++) {
    var nameWithoutSpaces = array[i].split(' ').join('');
    if (nameWithoutSpaces.length % 2 == 0) {
      evenLetterNames.push(array[i]);
    } else {
      oddLetterNames.push(array[i]);
    }
  }

  var even_array = [];
  for (var i = 0; i < evenLetterNames.length; i++) {
    var temp = evenLetterNames[i].split('');
    temp[0] = 'b';
    temp = temp.join('');
    even_array.push(temp);
  }

  var odd_array = [];
  for (var i = 0; i < oddLetterNames.length; i++) {
    var temp = oddLetterNames[i].split('');
    temp[temp.length - 1] = 'c';
    temp = temp.join('');
    odd_array.push(temp);
  }

  console.log(even_array);
  console.log(odd_array);
  return even_array;
}
console.log(sortingName(name_array))

