const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

/*  
*                  Roman numerals
                    M-------1000
                    CM------900
                    D-------500
                    CD------400
                    C-------100
                    XC------90
                    L-------50
                    XL------40
                    X-------10
                    IX------9
                    V-------5
                    IV------4
                    I-------1

 */

const romansNumbers = [
  "M",
  "CM",
  "D",
  "CD",
  "C",
  "XC",
  "L",
  "XL",
  "X",
  "IX",
  "V",
  "IV",
  "I",
];

const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
let result = "";

// prevent reload page
convertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  checkValue();
});

const checkValue = () => {
  if (numberInput.value === "") {
    output.classList.remove("hide");
    output.classList.add("warning");
    output.innerText = "Please enter a valid number.";
  } else if (numberInput.value <= 0) {
    output.classList.remove("hide");
    output.classList.add("warning");
    output.innerText = "Please enter a number greater than or equal to 1.";
  } else if (numberInput.value >= 4000) {
    output.classList.remove("hide");
    output.classList.add("warning");
    output.innerText = "Please enter a number less than or equal to 3999.";
  } else {
    let inputInt = parseInt(numberInput.value)
    values.forEach((element, index) => {
      while (inputInt >= element) {
        result += romansNumbers[index];
        inputInt -= element;
      }
    });
    output.classList.remove("hide");
    output.classList.remove("warning");
    output.innerText = result;
    result = "";
  }
};
