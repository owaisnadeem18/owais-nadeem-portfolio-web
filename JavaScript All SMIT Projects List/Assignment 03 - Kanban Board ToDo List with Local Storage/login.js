let login_email = document.getElementById("login_email");

let login_password = document.getElementById("login_password");

//   Get data from the local storage
let get_Local_Storage_Data = JSON.parse(localStorage.getItem("userData"));

function Sign_In() {
  if (login_email.value.trim() == "") {
    Swal.fire({
      icon: "error",
      title: "Login Email Should Not be Empty ...",
    });
  } else if (login_email.value != get_Local_Storage_Data.email) {
    Swal.fire({
      icon: "error",
      title: "Incorrect Email ! Please Enter the Correct Email ...",
    });
  } else if (login_password.value.trim() == "") {
    Swal.fire({
      icon: "error",
      title: "Login Password Should not be empty ...",
    });
  } else if (login_password.value != get_Local_Storage_Data.password) {
    Swal.fire({
      icon: "error",
      title: "Incorrect Password ! Please Enter the Correct Password ...",
    });
  }

  //   If all condiitons are TRUE
  else {
    Swal.fire({
      icon: "success",
      title: `${get_Local_Storage_Data.Fullname} has successfully Logged In ...`,
    });

    setTimeout(() => {
      window.location.href = "./Kanban_Board.html";
    }, 2000);
  }
}
