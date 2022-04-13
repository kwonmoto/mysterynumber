function rules() {
  function question1(a: number, b: number): number {
    return a + b;
  }
  function question2(a: number, b: number): number {
    return a * b;
  }
  function question3(a: number, b: number): number {
    return a - b;
  }
  const rulesArray = [question1, question2, question3];
  const randomNumber = Math.floor(Math.random() * rulesArray.length);

  return rulesArray[randomNumber];
}

export default rules;
