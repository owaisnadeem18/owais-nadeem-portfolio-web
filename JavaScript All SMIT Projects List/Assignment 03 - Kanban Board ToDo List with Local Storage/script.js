// Getting the all refrences of form inputs

let Fullname = document.getElementById("name");
let phone = document.getElementById("phone");
let email = document.getElementById("email_address");
let password = document.getElementById("pass");
let Confirm_Password = document.getElementById("confirm_pass");

function Sign_Up() {
  if (Fullname.value.trim() == "") {
    Swal.fire({
      icon: "error",
      title: "Name Should not be empty...",
    });
  } else if (phone.value.trim() == "") {
    Swal.fire({
      icon: "error",
      title: "Phone Number Should not be empty...",
    });
  } else if (email.value.trim() == "") {
    Swal.fire({
      icon: "error",
      title: "Email Should not be empty...",
    });
  } else if (
    password.value.trim() == "" ||
    Confirm_Password.value.trim() == ""
  ) {
    Swal.fire({
      icon: "error",
      title: "Password & Confirm Password Field Should not be empty...",
    });
  } else if (password.value !== Confirm_Password.value) {
    {
      Swal.fire({
        icon: "error",
        title: "Password & Confirm Password Does Not match ...",
      });
    }
  } else if (password.value == Confirm_Password.value) {
    Swal.fire({
      icon: "success",
      title: `${Fullname.value} Signed Up Successfully`,
    });

    data_obj = {
      Fullname: Fullname.value,
      phone: phone.value,
      email: email.value,
      password: password.value,
      Confirm_Password: Confirm_Password.value,
    };

    localStorage.setItem("userData", JSON.stringify(data_obj));
    let get_User_Data = JSON.parse(localStorage.getItem("userData"));
    console.log(get_User_Data);

    setTimeout(() => {
      window.location.href = "./login.html";
    }, 2000);
  }
}
