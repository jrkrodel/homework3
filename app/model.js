let numOfClasses = 1;

function initSite() {
  if (localStorage) {
    let students = localStorage.getItem("students");
    if (students) {
      let parsedStudents = JSON.parse(localStorage.getItem("students"));
      console.log(parsedStudents);
    } else {
      localStorage.setItem("students", "[]");
    }
  } else {
    console.log("No localStorage");
  }
}

function createStudent() {
  let allStudents = JSON.parse(localStorage.getItem("students"));
  let name = $("#name").val();
  let age = $("#age").val();
  let phone = $("#phone").val();
  let email = $("#email").val();
  let studentClasses = [];
  for (let index = 1; index <= numOfClasses; index++) {
    let classValue = $(`#class${index}`).val();
    if (classValue !== "") {
      studentClasses.push(classValue);
      $(`#class${index}`).val("");
    }
  }

  if (
    name !== "" &&
    age !== "" &&
    phone !== "" &&
    email !== "" &&
    studentClasses.length > 0
  ) {
    let studentObj = {
      name: name,
      age: age,
      phone: phone,
      email: email,
      studentClasses: studentClasses,
    };

    allStudents.push(studentObj);
    localStorage.setItem("students", JSON.stringify(allStudents));
    return true;
  } else {
    return false;
  }
}

function getStudents() {
  let students = JSON.parse(localStorage.getItem("students"));
  if (students.length > 0) {
    return students;
  } else {
    return false;
  }
}

function addClass() {
  numOfClasses++;
}

function minusClass() {
  numOfClasses--;
}

export {
  createStudent,
  addClass,
  minusClass,
  getStudents,
  initSite,
  numOfClasses,
};
