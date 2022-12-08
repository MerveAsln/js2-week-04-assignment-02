const isTheWordSplit = (pArray) => {
  let wordToCompare = pArray[0];

  let stringDictionary = pArray[1];

  let singleStrings = stringDictionary.split(",");

  let answerWords = "";

  singleStrings.map((firstWord) => {
    let splitMainWordArray = wordToCompare.split(firstWord);

    if (splitMainWordArray.length > 0) {
      splitMainWordArray.map((word) => {
        let joinedWord = firstWord + word;
        let reversedWord = [joinedWord].reverse().toString();

        if (joinedWord === wordToCompare || reversedWord === wordToCompare) {
          answerWords = firstWord + "," + word;
        } else {
          return "not possible";
        }
      });
    }
  });

  return answerWords;
};

console.log(
  isTheWordSplit(["hellocat", "apple,bat,cat,goodbye,hello,yellow,why"])
);

export { isTheWordSplit };
