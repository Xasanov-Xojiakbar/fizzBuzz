var $form = document.getElementById("form");
var $number = document.querySelector("#number");
var $result = document.querySelector("#result");
// var $result = document.getElementById("oloo");
// console.log($form);
// console.log($number);
// console.log($result);

var $fizzBuzz = `raqamingiz 3 va 5 sonlarga bo'linadi hamda natija FizzBuzz.`;
var $buzz = `raqamingiz faqat 5 soniga bo'linadi hamda natija Buzz.`;
var $fizz = `raqamingiz faqat 3 soniga bo'linadi hamda natija Fizz.`;
var $errorFizzBuzz = `raqamingiz 3 va 5 sonlarga ham bo'linmaydi.`;

// console.log(FizzBuzz);
// console.log(fizz);
// console.log(buzz);
// console.log(errorFizzBuzz);

$form.addEventListener("submit", function (event) {
  event.preventDefault();
  //   console.log($form);
  if ($number.value % 3 === 0 && $number.value % 5 === 0) {
    $result.textContent = `ushbu ${$number.value} ${$fizzBuzz}
  `;
  } else if ($number.value % 5 === 0) {
    $result.textContent = `ushbu ${$number.value} ${$buzz}
    `;
  } else if ($number.value % 3 === 0) {
    $result.textContent = `ushbu ${$number.value} ${$fizz}
    `;
  } else {
    $result.textContent = `ushbu ${$number.value} ${$errorFizzBuzz}`;
  }
  // console.log($number.value);
  $number.value = "";
});
