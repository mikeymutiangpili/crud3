var UniqueID, fnameV, MnameV, addressV, genderV,  SurnameV, EmailV;

function readFom() {
  UniqueIDV = document.getElementById("Uid").value;
  fnameV = document.getElementById("fname").value;
  MnameV = document.getElementById("Mname").value;
  genderV = document.getElementById("gender").value;
  SurnameV = document.getElementById("Sname").value;
  addressV = document.getElementById("address").value;
  EmailV = document.getElementById("Email").value;
  console.log(UniqueIDV, fnameV, MnameV, addressV, genderV,  SurnameV, EmailV );
}

document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + UniqueIDV)
    .set({
      UidNo: UniqueIDV,
      fname: fnameV,
      Middlename: MnameV,
      Surname: SurnameV,
      gender: genderV,
      address: addressV,
      Email: EmailV,
    });
    Swal.fire({
      title: "Data Inserted",
      text: "You clicked the button!",
      icon: "success"
    });
  document.getElementById("Uid").value = "";
  document.getElementById("fname").value = "";
  document.getElementById("Mname").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("Sname").value = "";
  document.getElementById("address").value = "";
  document.getElementById("Email").value = "";
};

document.getElementById("read").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" +  UniqueIDV)
    .on("value", function (snap) {
      document.getElementById("Uid").value = snap.val().UidNo;
      document.getElementById("fname").value = snap.val().fname;
      document.getElementById("Mname").value = snap.val().Middlename;
      document.getElementById("gender").value = snap.val().gender;
      document.getElementById("Sname").value = snap.val().Surname;
      document.getElementById("address").value = snap.val().address;
      document.getElementById("Email").value = snap.val().Email;
    });
};

document.getElementById("update").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + UniqueIDV)
    .update({
      //   UidNo: UidV,
      UidNo: UniqueIDV,
      fname: fnameV,
      Middlename: MnameV,
      Surname: SurnameV,
      gender: genderV,
      address: addressV,
      Email: EmailV,
    });
    Swal.fire({
      title: "Data Updated!",
      text: "You clicked the button!",
      icon: "success"
    });
  document.getElementById("Uid").value = "";
  document.getElementById("fname").value = "";
  document.getElementById("Mname").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("address").value = "";
  document.getElementById("Sname").value = "";
  document.getElementById("Email").value = "";
};
document.getElementById("delete").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" +  UniqueIDV)
    .remove();
    Swal.fire({
      title: "Data removed",
      text: "You clicked the button!",
      icon: "success"
    });
  document.getElementById("Uid").value = "";
  document.getElementById("fname").value = "";
  document.getElementById("Mname").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("Sname").value = "";
  document.getElementById("address").value = "";
  document.getElementById("Email").value = "";
};
