type Id = number;

export interface Student {
  studentId: Id;
  name: string;
  marks: number;
  email?: string;
}

// Student[] means "an array where every element must match the Student shape
let studentList: Student[] = [
  {
    studentId: 1,
    name: "Raju",
    marks: 85,
  },
];

function addStudent(student: Student): void {
  if (studentList.some((i) => i.studentId === student.studentId)) {
    console.log("Student ID already exists");
    return;
  }
  studentList.push(student);
  console.log(`${student.name} added successfully`);
}

function removeStudent(studentId: number): void {
  const before = studentList.length;
  studentList = studentList.filter((i) => i.studentId != studentId);
  if (before === studentList.length) {
    console.log("Student not found");
    return;
  }
  console.log(`Id ${studentId} removed successfully`);
}

function updateStudent(studentId: number, name?: string, marks?: number): void {
  const index = studentList.findIndex((i) => i.studentId === studentId);
  if (index === -1) {
    console.log(`Id ${studentId} not found`);
    return;
  }
  // if(0)  // false — same as if(false)
  // noUncheckedIndexedAccess treats every array lookup as Student | undefined.
  // Even though findIndex() returned a valid index, TypeScript can't guarantee
  // the array wasn't modified before this access. Store the element in a variable
  // and use type narrowing to safely handle the undefined case.

  const student = studentList[index];
  //this checks give student type = student | undefined(if the index doesn't exist)

  // If student is undefined (or any other falsy value), exit the function immediately.
  if (!student) return;

  if (name !== undefined) {
    //studentList[index] is the same thing as student."
    // So it still complains that it could be undefined.
    // Don't use direct indexing studentList[0]
    // Now you're using the same variable that TypeScript already narrowed.
    student.name = name;
  }
  if (marks !== undefined) {
    student.marks = marks;
  }
  console.log(`Details Updated successfully`);
}

function listStudent(): void {
  if (studentList.length === 0) {
    console.log("No students found");
    return;
  }
  studentList.forEach((i) =>
    console.log(
      `StudentId: ${i.studentId} Name: ${i.name} Marks: ${i.marks} ${i.email ? `Email: ${i.email}` : ""}`,
    ),
  );
}

function getAvg(): void {
  if (studentList.length === 0) {
    console.log("No students found");
    return;
  }

  const totalMarks = studentList.reduce((sum, i) => sum + i.marks, 0);
  const avgMarks = totalMarks / studentList.length;

  console.log(`Average marks is ${avgMarks}`);
}

// function calling

addStudent({ studentId: 2, name: "mohit", marks: 45 });

listStudent();

// removeStudent(2);

// listStudent();

getAvg();

//to skip the name(optional), order matters
updateStudent(1, undefined, 100);

getAvg();

addStudent({ studentId: 2, name: "mohit", marks: 45 });
