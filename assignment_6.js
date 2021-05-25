var array = ["Retta", "Vern", "Marica", "Cyrus", "Linette",
  "Curt", "Nichole", "Jesica", "Wynell", "Michaele"]

function longest(array) {
  var longest_name = array[0];
  for (var i = 1; i < array.length; i++) {
    if (array[i].length > longest_name.length) {
      longest_name = array[i];
    }
  }
  return longest_name;
}

var answer = longest(array);
console.log(answer);