
// https://www.hackerrank.com/challenges/designer-pdf-viewer

// Print the area of the highlight rectangle when a given word is highlighted.

const LETTER_WIDTH = 1;
const LETTER_HEIGHTS = [1,3,1,3,1,4,1,3,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5];

function printWordArea(word) {
  const length = word.length;
  const wordWidth = LETTER_WIDTH * length;
  const wordHeight = getWordHeight(word);
  const wordArea = wordWidth * wordHeight;

  console.log(wordArea);
}

function getWordHeight(word) {
  word = word.toLowerCase();
  const length = word.length;
  const charCodeA = 'a'.charCodeAt(0);
  let tallestHeight = 0;

  for (let i = 0; i < length; i++) {
    const letterCharCode = word.charCodeAt(i);
    const letterIndex = letterCharCode - charCodeA;
    const letterHeight = LETTER_HEIGHTS[letterIndex];

    if (letterHeight > tallestHeight) {
      tallestHeight = letterHeight;
    }
  }

  return tallestHeight;
}
