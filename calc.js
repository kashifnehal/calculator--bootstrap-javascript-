// var one = document.getElementById('1')
// one.addEventListener('click',fone)

// var two = document.getElementById('2')
// two.addEventListener('click',ftwo)

// var three = document.getElementById('3')
// three.addEventListener('click',fthree)

// var four = document.getElementById('4')
// four.addEventListener('click',ffour)

// var five = document.getElementById('5')
// five.addEventListener('click',ffive)

// var six = document.getElementById('6')
// six.addEventListener('click',fsix)

// var seven = document.getElementById('7')
// seven.addEventListener('click',fseven)

// var eight = document.getElementById('8')
// eight.addEventListener('click',feight)

// var nine = document.getElementById('9')
// nine.addEventListener('click',fnine)

// var zero = document.getElementById('0')
// zero.addEventListener('click',fzero)

// var dot = document.getElementById('.')
// dot.addEventListener('click',fdot)

// var mul = document.getElementById('*')
// mul.addEventListener('click',fmul)

// var div = document.getElementById('/')
// div.addEventListener('click',fdiv)

// var plus = document.getElementById('+')
// plus.addEventListener('click',fplus)

// var minus = document.getElementById('-')
// minus.addEventListener('click',fdiv)

// var equal = document.getElementById('=')
// equal.addEventListener('click',fequal)


// Determines button clicked via id
function myFunction(id) {
    document.calc.result.value+=id;
  }
  
  // Clears calculator input screen
  function clearScreen() {
    document.calc.result.value="";
  }
  
  // Calculates input values
  function calculate() {
    try {
      var input = eval(document.calc.result.value);
      document.calc.result.value=input;
    } catch(err){
        document.calc.result.value="Error";
      }
  }
// //   -----------OR SIMPLY-----------
// function calculate() {
//     var input = eval(document.calc.result.value);
//     document.calc.result.value=input;
// }

















