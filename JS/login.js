function loginFun() {
  if (loginInput.value == localStorage.getItem("signupNumber")) {
    setTimeout(() => {
      window.location.href = "otp.html";
    }, 1000);
  } else {
    setTimeout(() => {
      invalidNumber.style.display = "block";
    }, 1000);
    setTimeout(() => {
      window.location.reload();
    }, 5000);
  }
}

function inputFun() {
  // here loginInput is the ID of input tag and login_button is the ID of login button
  if (loginInput.value.length == 10) {
    login_button.style.cursor = "pointer";
    login_button.style.backgroundColor = "rgb(128, 53, 194)";
    login_button.style.border = "none";
    login_button.style.color = "white";
    login_button.removeAttribute("disabled");
  } else {
    login_button.setAttribute("disabled", "disabled");
    login_button.style.cursor = "not-allowed";
    login_button.style.backgroundColor = "transparent";
    login_button.style.color = "#cfcdcb";
    login_button.style.border = "1px solid #cfcdcb";
  }
}
