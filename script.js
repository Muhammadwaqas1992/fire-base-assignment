
  let rollV, nameV, fatherV;
  
  function readForm() {
    rollV = document.querySelector("#roll-no").value;
    nameV = document.querySelector("#u-name").value;
    fatherV = document.querySelector("#f-name").value;
    console.log(rollV, nameV, fatherV);
  }
  
  document.querySelector("#insert").onclick = function () {
    readForm();
  
    firebase
      .database()
      .ref("student/" + rollV)
      .set({
        rollno: rollV,
        name: nameV,
        father: fatherV,
      });
  
    alert("Data inserted");
    document.querySelector("#roll-no").value = "";
    document.querySelector("#u-name").value = "";
    document.querySelector("#f-name").value = "";
  };
  
  document.querySelector("#update").onclick = function () {
    readForm();
  
    firebase
      .database()
      .ref("student/" + rollV)
      .update({
        rollno: rollV,
        name: nameV,
        father: fatherV,
      });
  
    alert("Data updated");
    document.querySelector("#roll-no").value = "";
    document.querySelector("#u-name").value = "";
    document.querySelector("#f-name").value = "";
  };
  
  document.querySelector("#delete").onclick = function () {
    readForm();
  
    firebase.database().ref("student/" + rollV).remove();
  
    alert("Data deleted");
    document.querySelector("#roll-no").value = "";
    document.querySelector("#u-name").value = "";
    document.querySelector("#f-name").value = "";
  };
  
  document.querySelector("#read").onclick = function () {
    readForm();
  
    firebase
      .database()
      .ref("student/" + rollV)
      .on("value", function (snap) {
        const student = snap.val();
        if (student) {
          document.querySelector("#roll-no-output").textContent = `Roll No: ${student.rollno}`;
          document.querySelector("#u-name-output").textContent = `Name: ${student.name}`;
          document.querySelector("#f-name-output").textContent = `Father Name: ${student.father}`;
        } else {
          document.querySelector("#roll-no-output").textContent = "No data found.";
          document.querySelector("#u-name-output").textContent = "";
          document.querySelector("#f-name-output").textContent = "";
        }
      });
  };
  