function verifyFun() {
  if (num.value == 1234) {
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1000);
  } else {
    alert("Invalid otp");
  }
}

function inputFun() {
  // here mobileNumber is the ID of input tag and login_button is the ID of login button
  if (num.value.length == 4) {
    otp_button.style.cursor = "pointer";
    otp_button.style.backgroundColor = "rgb(128, 53, 194)";
    otp_button.style.border = "none";
    otp_button.style.color = "white";
    otp_button.removeAttribute("disabled");
  } else {
    otp_button.setAttribute("disabled", "disabled");
    otp_button.style.cursor = "not-allowed";
    otp_button.style.backgroundColor = "transparent";
    otp_button.style.color = "#cfcdcb";
    otp_button.style.border = "1px solid #cfcdcb";
  }
}
