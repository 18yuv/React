import Student from "./Student";

// array of objects
const studentsData = [
  { name: "Yuvi", grade: "A (top)" , age:19},
  { name: "papu", grade: "B", age:20 },
  { name: "sourhadya", grade: "E (Fail)",age:19 },
  { name: "Dhruv", grade:"B (papu 2)", age:20}
];

// do the same on a object of arrays using fucntions like Object.Keys etc

const App = () => {
  return (
    <div>
      <h1>Student List</h1>
      {studentsData.map((student, index) => (
        <Student key={index} name={student.name} grade={student.grade} age={student.age} />
      ))}
    </div>
  );
};

export default App;
