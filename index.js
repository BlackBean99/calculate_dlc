document.addEventListener('DOMContentLoaded', (event) => {
  // 엘리먼트 가져오기
  const firstValue = document.getElementById('first');
  const secondValue = document.getElementById('second');
  const output = document.getElementById('output');

  const formSubmitHandler = (event, operation) => {
    event.preventDefault();
    let result;

    switch (operation) {
      case 'add':
        result = add(Number(firstValue.value), Number(secondValue.value));
        break;
      case 'minus':
        result = minus(Number(firstValue.value), Number(secondValue.value));
        break;
      case 'multiply':
        result = multiply(Number(firstValue.value), Number(secondValue.value));
        break;
      case 'divide':
        result = divide(Number(firstValue.value), Number(secondValue.value));
        break;
      default:
        break;
    }
    // 결과 값 출력
    output.textContent = result;
  };

  // Event listeners for buttons
  document.getElementById('add').addEventListener('click', (event) => formSubmitHandler(event, 'add'));
  document.getElementById('minus').addEventListener('click', (event) => formSubmitHandler(event, 'minus'));
  document.getElementById('multiply').addEventListener('click', (event) => formSubmitHandler(event, 'multiply'));
  document.getElementById('divide').addEventListener('click', (event) => formSubmitHandler(event, 'divide'));

  // 덧셈 함수
  const add = (a, b) => a + b;
  const minus = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => a / b;
});