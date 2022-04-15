function rules() {
  const circle = (num: number): number => {
    switch (num) {
      case 1 || 2 || 3 || 4 || 5 || 7:
        return 0;
      case 6 || 9 || 0:
        return 1;
      case 8:
        return 2;
      default:
        return 0;
    }
  };
  function question1(a: number, b: number): number {
    return a + b;
  }
  function question2(a: number, b: number): number {
    return a * b;
  }
  function question3(a: number, b: number): number {
    return a - b;
  }
  function question4(a: number, b: number): number {
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
  const rulesArray = [question1, question2, question3, question4];
  const randomNumber = Math.floor(Math.random() * rulesArray.length);

  return rulesArray[randomNumber];
}

export default rules;
