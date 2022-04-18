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
  const one = (num: number): number => {
    switch (num) {
      case 1:
        return 1;
      case 0:
        return 0;
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
  //이진수로 바꿔서 1의 개수 구하기
  function question11(a: number, b: number): number {
    let sumA = 0;
    let sumB = 0;
    let i = 0;
    let j = 0;
    let aString = a.toString(2);
    let bString = b.toString(2);
    while (aString[i]) {
      sumA += one(Number(aString[i]));
      i++;
    }
    while (bString[j]) {
      sumB += one(Number(bString[j]));
      j++;
    }
    return sumA + sumB;
  }
  //자리수 더하기
  function question12(a: number, b: number): number {
    let sumA = a.toString();
    let sumB = b.toString();
    let i = 0;
    let j = 0;
    while (sumA[i]) {
      i++;
    }
    while (sumB[j]) {
      j++;
    }
    return i + j;
  }
  //(일의자리수 빼고 더한거) - (일의자리수 끼리 더한거)
  function question13(a: number, b: number): number {
    let x = a % 10;
    let y = b % 10;
    let i = Number(parseInt((a / 10).toString()));
    let j = Number(parseInt((b / 10).toString()));
    let sumA = x + y;
    let sumB = i + j;
    return sumB - sumA;
  }
  //소수면 1 아니면 0 두개 합
  function question14(a: number, b: number): number {
    let isA = 1;
    let isB = 1;
    if (a <= 1) return (isA = 0);
    if (b <= 1) return (isB = 0);
    for (let i = 2; a > i; i++) {
      if (a % i === 0) {
        isA = 0;
      }
    }
    for (let i = 2; b > i; i++) {
      if (b % i === 0) {
        isB = 0;
      }
    }
    return isA + isB;
  }
  const rulesArray = [
    question1,
    question2,
    question3,
    question11,
    question12,
    question13,
    question14,
  ];
  const randomNumber = Math.floor(randomNum * rulesArray.length);

  return rulesArray[randomNumber];
}

export default rules;
