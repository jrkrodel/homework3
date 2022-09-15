import * as MODEL from "./model.js";

function initListeners() {
  $("#submit").click((e) => {
    e.preventDefault();
    if (MODEL.createStudent()) {
      $("#name").val("");
      $("#age").val("");
      $("#phone").val("");
      $("#email").val("");
      $("#class").val("");
    } else {
      alert("Please fill out the required fields");
    }
  });

  $("#addClass").click((e) => {
    MODEL.addClass();
    $("#classes").append(
      `<input type="class" id="class${MODEL.numOfClasses}" />`
    );
  });

  $("#deleteClass").click((e) => {
    if (MODEL.numOfClasses === 1) {
      alert("Most have atleast one class");
    } else if (MODEL.numOfClasses > 1) {
      let classInput = document.getElementById(`class${MODEL.numOfClasses}`);
      MODEL.minusClass();
      classInput.remove();
    }
  });

  $("#getStudents").click((e) => {
    e.preventDefault();
    $("#app").html("");
    let allStudents = MODEL.getStudents();
    if (allStudents) {
      $("#app").append(
        "<table><tr><th>Name</th><th>Age</th><th>Phone</th><th>Email</th><th>Classes</th></tr></table>"
      );
      $.each(allStudents, function (idx, student) {
        let classes = student.studentClasses.join(", ");
        $("#app table").append(
          `<tr><td>${student.name}</td><td>${student.age}</td><td>${student.phone}</td><td>${student.email}</td><td>${classes}</td></tr>`
        );
      });
    } else {
      alert("No students found");
    }
  });
}

$(document).ready(function () {
  initListeners();
  MODEL.initSite();
});
