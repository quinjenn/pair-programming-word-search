const transpose = function (matrix) {
  const arr = [];
  let row = matrix.length;
  let col = matrix[0].length;

  for (let i = 0; i < col; i++) {
    arr[i] = Array(row);
  }

  for (let j = 0; j < row; j++) {
    for (let i = 0; i < col; i++) {
      arr[i][j] = matrix[j][i];
    }
  }
  return arr;
};

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(""));

  for (const l of horizontalJoin) {
    //iterate through each string
    if (l.includes(word)) return true;
  }

  const verticalJoin = transpose(horizontalJoin).map((ls) => ls.join(""));

  for (const l of verticalJoin) {
    //iterate through each string
    console.log(l);
    if (l.includes(word)) return true;
  }

  return false;
};

module.exports = wordSearch;
