let a = null;
let b = undefined;
let c = NaN;
let d = "";
let e = false;
let f = 0;

console.log("f == f", f === f);

const day = "Tuesday";

switch (day) {
  case "Monday":
    console.log("1st Day");
  case "Tuesday":
    console.log("2nd Day");
  case "Wednesday":
    console.log("3rd Day");
  case "Thursday":
    console.log("4th Day");
  case "Friday":
    console.log("5th Day");
  case "Saturday":
    console.log("6th Day");
  case "Sunday":
    console.log("7th Day");
}
