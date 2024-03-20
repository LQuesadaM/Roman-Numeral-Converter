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
