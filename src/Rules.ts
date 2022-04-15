function rules(randomNum: number) {
  const circle = (num: number): number => {
    switch (true) {
      case num === 1 ||
        num === 2 ||
        num === 3 ||
        num === 4 ||
        num === 5 ||
        num === 7:
        return 0;
      case num === 6 || num === 9 || num === 0:
        return 1;
      case num === 8:
        return 2;
      default:
        return 0;
    }
  };
  function question1(a: number, b: number): number {
    return a + b;
  }
  function question2(a: number, b: number): number {
    return a - b;
  }
  function question3(a: number, b: number): number {
    let sumA = 0;
    let sumB = 0;
    let i = 0;
    let j = 0;
    let aString = a.toString();
    let bString = b.toString();
    while (aString[i]) {
      sumA += circle(Number(aString[i]));
      i++;
    }
    while (bString[j]) {
      sumB += circle(Number(bString[j]));
      j++;
    }
    return sumA + sumB;
  }
  const rulesArray = [question1, question2, question3];
  const randomNumber = Math.floor(randomNum * rulesArray.length);

  return rulesArray[randomNumber];
}

export default rules;
