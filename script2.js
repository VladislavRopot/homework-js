const students = [
  {
    firstName: 'Ion',
    lastName: 'Baton',
    subjects: [
      {
        name: "Mathematics",
        marks: [6, 8, 5, 6]
      },
      {
        name: "Science",
        marks: [9, 8, 9, 10]
      }
    ]
  },
  {
    firstName: 'Vasea',
    lastName: 'GaraCentru',
    subjects: [
      {
        name: "Mathematics",
        marks: [10, 8, 9, 7]
      },
      {
        name: "Science",
        marks: [7, 8, 9, 10]
      }
    ]
  }
];

students.forEach(student => {
  student.subjects.forEach(subject => {
    let sum = 0;
    subject.marks.forEach(mark => sum += mark);
    subject.averageMark = sum / subject.marks.length;
  });
});

students.forEach(student => {
  let sum = 0;
  student.subjects.forEach(subject => sum += subject.averageMark);
  student.averageMark = sum / student.subjects.length;
});

let totalAverage = 0;
students.forEach(student => totalAverage += student.averageMark);

const finalAverage = totalAverage / students.length;

console.log(students); 
console.log('Media generală a tuturor studenților:', finalAverage);