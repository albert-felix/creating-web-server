const marks = [20, 30, 70, 90];

const increasedMarks = marks.map(mark => mark + 5);
console.log("Increased Marks", increasedMarks);

const filteredMarks = marks.filter(mark => mark > 30);
console.log("Filtered Marks", filteredMarks);

const findMarks = marks.find(mark => mark === 30);
console.log("Found Marks", findMarks);

function useLessFuntion() {
  // function scope
  var myVariable = "Some";
  const mySecondVariable = "Some"
}

if (true) {
  // block scope
  var myVariable = "Some Text";
  var mySecondVariable = "Some Text";
  const myThirdVariable = "Some Text";
}

console.log(myVariable);
console.log(mySecondVariable);
// console.log(myThirdVariable);