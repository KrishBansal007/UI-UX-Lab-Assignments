const student = { name: "Alok Kumar", age: 20,
grades: { math: 85,
science: 92,
english: 78
}
};
student.class = "Third Year"; student.grades.math = 90; console.log("Student Information:"); console.log("Name: " + student.name); console.log("Age: " + student.age); console.log("Class: " + student.class); console.log("Grades:");
console.log(" Math: " + student.grades.math); console.log(" Science: " + student.grades.science); console.log(" English: " + student.grades.english);
